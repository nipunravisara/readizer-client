import TwitterIcon from "../assets/svgs/Twitter";
import InstagramIcon from "../assets/svgs/Instagram";
import GithubIcon from "../assets/svgs/Github";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-8 py-12 md:px-16 lg:px-64 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
          <div>
            <h4 className="text-5xl font-extrabold tracking-tighter text-white mb-4 text-center lg:text-left">
              Readizer
            </h4>
            <p class="text-gray-400 text-center lg:text-left px-12 lg:p-0">
              We have carefully crafted the blog to suit to everyone's need.
            </p>
          </div>

          <div className="flex flex-row pt-12 lg:p-0">
            <a href="w.s.com" className="text-white mx-3">
              <TwitterIcon />
            </a>
            <a href="w.s.com" className="text-white mx-3">
              <InstagramIcon />
            </a>
            <a href="w.s.com" className="text-white mx-3">
              <GithubIcon />
            </a>
          </div>
        </div>

        <div class="border-t border-solid border-gray-900 mt-4 pt-4">
          <div class="container px-4 mx-auto">
            <div class="md:flex md:-mx-4 md:items-center">
              <div class="md:flex-1 text-center md:text-left">
                <p class="text-white">
                  <strong>readizer</strong>&copy;<strong>2021</strong>
                </p>
              </div>
              <div class="md:flex-1 text-center md:text-right">
                <a
                  href="www.s.com"
                  class="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="www.s.com"
                  class="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
