import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="w-full head_text text-center" >
        <span className="blue_gradient" >
          {type} Post
        </span>
      </h1>

      <p className="desc mx-auto text-center" >
        {type} and share amazing cooking videos with the world, and eat healthy and live good life with cookingtopia. 
      </p>

      <form
        onSubmit={ handleSubmit }
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto mb-10"
        >

          
          <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Title
          </span>

          <input
            value={post.prompt_title}
            onChange = {(e) => setPost({
              ...post, prompt_title:e.target.value
            })}
            placeholder="Title"
            required
            className="form_input"
          >
          </input>

          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Video link
          </span>

            <textarea
            value={post.prompt}
            onChange = {(e) => setPost({
              ...post, prompt:e.target.value
            })}
            placeholder="Write your prompt here!"
            required
            className="form_textarea"
          >
          </textarea>

          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag {` `}
              <span className="font-normal">
                (#Noodle, #Breakfast, #Slowcook)
              </span>
            </span>

            <input
            value={post.tag}
            onChange = {(e) => setPost({
              ...post, tag:e.target.value
            })}
            placeholder="#tag"
            required
            className="form_input"
          >
          </input>

          </label>
          
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className='text-gray-500 text-sm'>
              Cancel
            </Link>

            <button
            type="submit"
            disabled={ submitting }
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
            {/* Simply it means create or edit */}
            {submitting ? `${type}...` : type }


            </button>
          </div>



      </form>

    </section>
  )
}

export default Form