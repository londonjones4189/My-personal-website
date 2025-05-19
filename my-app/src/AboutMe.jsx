import Headshot from './assets/headshot.jpeg'; 

function AboutMe() {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md">
      <img
        src={Headshot}
        alt="headshot"
        className="w-32 h-32 rounded-full object-cover"
      />
      <h3 className="text-2xl font-bold">
        Hello, my name is Placeholder. Placeholder placeholder... bejhfgfkwgfl.
      </h3>
    </div>
  );
}

export default AboutMe;
