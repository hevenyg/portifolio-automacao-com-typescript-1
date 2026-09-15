const BASE_URL ='https://jsonplaceholder.typicode.com';
//Definir contratos de tipo
type Post = {
    userId:number;
    id?: number; //campo opcional
    title: string;
    body: string;
};

type Coment ={
    postId: number;
    id: number;
    name: string;
    email: string;
    Body: string;
};

//GET /posts

async function listarPosts(){
    console.log(`Primeiro código GET /posts`);
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
        console.log(`✅ Status: ${res.status}`);
        console.log(`Lidos ${dados.length} posts. Ex do primeiro:`, dados[0].tittle);

}
//GET /posts/1
async function buscarPorId(id: number) {
    console.log(` código GET /posts`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post[] = await res.json();
        console.log(`✅ Status: ${res.status}`);
        console.log(`Titulo do post ${id}:`, dados.title);

    
}
// GET/post/1/comment
async function listComent(postId:number) {
    console.log(` código GET /posts`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Coment[] = await res.json();
        console.log(`✅ Status: ${res.status}`);
        console.log(`O post ${postId} tem ${dados.length} comentarios. Ex email do primeiro comentarios.`, dados[0].email);
    
}
async function chamarReqs() {
    listarPosts();
    buscarPorId(1);
    listComent(1);
}
chamarReqs();


