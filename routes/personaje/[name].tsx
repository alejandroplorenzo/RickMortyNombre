import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import Character from "../../components/Character.tsx"

type CharacterData = {
  name: string;
  image: string;
};

type Data = {
  characters: Array<CharacterData>;
};

type CharacterAPI = {
  results: Array<{
    name: string;
    image: string;
  }>;
};


export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
        const {name} = ctx.params;
        //const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
        let url = "https://rickandmortyapi.com/api/character";
        if(name){
          url = url + "/?name=" + name;
        }
        try{
            const response = await Axios.get<CharacterAPI>(url);
  
            return ctx.render({ characters: response.data.results });

        }catch(e){
            return new Response("Error de API");
        }
    }
}

const Page = (props: PageProps<Data>) => {
    const characters = props.data.characters;
  
    return (
      <div>
        <Character characters={characters} />
      </div>
    );
  };

export default Page;