import Feed from '@components/Feed';
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

        <Image
          src="/assets/images/whisk.png"
          alt="Promptopia Logo"
          width={100}
          height={100}
          className="object-contain"
        />

      <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Cooking Videos</span>
      </h1>
      <p className="desc text-center">
            Cookingtopia is an video prompting tool for modern world to discover,
            create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home