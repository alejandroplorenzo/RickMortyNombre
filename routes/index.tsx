import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
  name?: string;
}


export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name") || undefined;

    if (name) {
      return new Response("", {
        status: 307,
        headers: { Location: `/personaje/${name}` },
      });
    }
    return ctx.render({ name });
  },
}

const Page = (props: PageProps<Data>) =>{
  return (
    <div>
      <form method="GET">
        <input type="text" name="name" value={props.data.name || ""}/>
        <button type="submit">BUSCAR</button>
      </form>
    </div>
  );
}

export default Page;
