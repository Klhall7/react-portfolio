import { Link } from "react-router-dom";
import profile from "../images/profile-photo.png";

const Portfolio = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <section className="flex flex-row">
                    <aside className="flex-grow-0 flex-shrink-0 w-1/4 min-h-screen flex-col justify-center items-center text-base overflow-auto">
                        <img
                            src={profile}
                            alt="picture"
                            className="object-contain rounded-full h-20 w-20"
                        />
                        <h3>Kyra Hall</h3>
                        <p className="text-sm">
                            Full Stack Developer
                        </p>
                        <div className="flex flex-col gap-4 text-sm">
                            <a href="mailto:kyravitch98@gmail.com">
                                kyravitch98@gmail.com
                            </a>
                            <Link
                                to="https://www.linkedin.com/in/kyra-hall-/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                to="https://github.com/kyrahall"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm overflow-wrap">
                                Thank you for visiting! I started my dev career
                                in the winter of 2024. I love to build useful
                                and fun applications and I&apos;m always looking
                                to learn new skills. Please consider leaving me
                                feedback or share your content with me!
                            </p>
                            <h4>Education</h4>
                            <p className="text-sm">
                                Immersive Web Development Certificate - 444
                                hours -Carolina Code School (2024)
                            </p>
                        </div>
                    </aside>
                </section>

                <section className="flex flex-grow-0 flex-shrink-0 w-4/5 flex-col min-h-screen">
                    <div className="flex ">
                        <h2 >Tech Skills </h2>
                        <div className="grid">
                            {/* most comfortable tech-stack here  */}
                        </div>

                        <div className="grid">
                            <h2>Projects</h2>
                            {/* projects here with live site link, source code link , tech build , description, planned improvements, and a screenshot/demo  */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Portfolio;

// main page for the rest of the site, add styles
