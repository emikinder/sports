import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgHome from "../assets/images/stats.jpg";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <>
            <section className="h-screen flex items-center">
                <div className="flex justify-center">
                    <div className="w-10/12 flex">
                        <div className="w-2/5 flex justify-center">
                            {/* <img className="absolute" src={sports} alt="" width={300} /> */}
                            <img
                                className=""
                                src={imgHome}
                                alt=""
                                width={400}
                            />
                        </div>
                        <div className="w-3/5 flex items-center">
                            {/* <TypeAnimation
                                cursor={true}
                                sequence={[
                                    `Take your ${test} passion for sports to the next level.`,
                                    2000,
                                ]}
                                speed={180}
                                className="text-6xl"
                            /> */}
                            <h1 className="text-6xl">
                                Take your{" "}
                                <span className="text-customGreen">
                                    passion
                                </span>{" "}
                                for{" "}
                                <span className="text-customGreen">sports</span>{" "}
                                to the next level.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-screen">
                <div className="flex justify-center">
                    <div className="w-10/12 flex">
                        <div className="w-5/12">
                            <div className="border w-11/12">
                                <h2>
                                    <FontAwesomeIcon icon={faFutbol} /> Football
                                    Leagues
                                </h2>
                            </div>
                        </div>
                        <div className="w-7/12 px-8 py-4 text-white bg-customGreen rounded">
                            <p className="text-3xl">
                                All Football Matches Fixtures & Tips for
                                Tomorrow
                            </p>
                            <p className="mt-3">
                                Get all the information about tomorrows matches
                                from more than 300 leagues worldwide. We offer
                                pre-match tips, results, and more to help you
                                decide your next bet.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center">
                    <div className="w-10/12 flex">
                        <div className="w-2/5 flex justify-center">
                        </div>
                        <div className="w-3/5 flex items-center"></div>
                    </div>
                </div> */}
            </section>
        </>
    );
};