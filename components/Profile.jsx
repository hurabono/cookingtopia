import PromptCard from "./PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">

      <h1 className="head_text text-center">
        <span className="orange_gradient">
          {name}
        </span>
      </h1>

      <p className="desc text-center pt-5 mx-auto w-full">
        {desc}
      </p>

      <div className="mt-10 prompt_layout">
        { data.map((post)=>(
          <PromptCard 
            key={post._id}
            post={post}
            handleEdit= {()=> handleEdit && handleEdit(post)}
            handleDelete= {()=> handleDelete && handleDelete(post)}
          />
        ))}
      </div>

    </section>
  )
}

export default Profile