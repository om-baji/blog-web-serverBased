import HomeHeading from "../components/HomeHeading"

const HomePage = () => {
  return (
    <div 
    className="flex justify-center items-center h-screen
    bg-[url('https://images.unsplash.com/photo-1725922638181-3dbab8df0f95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <HomeHeading text={"Discover Medium, a platform where ideas come to life. Medium, founded by Evan Williams in 2012, is more than just a publishing platform—it's a space where voices from around the world share stories, insights, and experiences. Whether you're an avid reader or an aspiring writer, Medium offers a community-driven approach to exploring topics that matter most to you. Dive into thought-provoking articles, connect with like-minded individuals, and contribute your own unique perspective to a global conversation."} />
    </div>
  )
}

export default HomePage
