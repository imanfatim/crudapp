import EditTopicForm from "@/components/EditTopicForm";


import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";


const getTopicById = async (id) => {
    await connectMongoDB();
    const topic = await Topic.findById(id);
    return topic;
  };
  
  const Page = async ({ params }) => {
    const { id } = params;
    const topic = await getTopicById(id);
  
    if (!topic) {
      return <div>Topic not found</div>;
    }
  
    const { title, description } = topic;
  
    return <EditTopicForm id={id} title={title} description={description} />;
  };
  
  export default Page;

// const getTopicById = async (id) => {
//     try {
//         const res = await fetch (`http://localhost:3000/api/topics/${id}`,{cache: "no-store",});
      
//         if(!res.ok){
//             throw new Error("Error fetching topic");
//         }

//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };



// export default async function EditTopic({ params }){
    
//     const{id} = params;
//     const {topic} =await getTopicById(id);
//     const {title, description }= topic;


//     console.log("id",id);
//     return(
//        <EditTopicForm id={id} title ={title} description ={description}/>
//     )
// }