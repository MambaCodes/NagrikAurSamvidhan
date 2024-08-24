
export default function V0About() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-background">
            <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Hackathon Project: Gamifying Constitution
                            </h1>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                            Our hackathon project is dedicated to transforming the Indian Constitution into an engaging and interactive learning experience through various games. By leveraging gamification techniques, we aim to present the fundamental principles and articles of the Constitution in a way that is both enjoyable and educational.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">The Problem</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                            The Indian Constitution, a vital document outlining the rights and duties of every citizen, is often perceived as complex and difficult to understand, especially for younger audiences and those without a legal background. Traditional methods of teaching the Constitution can be dry and disengaging, leading to low levels of awareness and comprehension among the general public.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Our Solution</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                            Our hackathon solution is to gamify the learning of the Indian Constitution by transforming its key principles into engaging, interactive games. By using formats like quizzes, board games, and challenges, we aim to simplify complex legal concepts and make them fun to explore. This approach will not only make the content more accessible but also encourage active participation, helping users retain information better.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">Meet the Team</h2>
                            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">JD</div>
                                    <div>
                                        <h3 className="text-lg font-medium">John Doe</h3>
                                        <p className="text-muted-foreground">Project Lead</p>
                                        <p className="text-muted-foreground">
                                            John is a seasoned software engineer with a background in disaster response coordination. He leads
                                            the team in designing and implementing the project's core functionality.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">JA</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Jane Appleseed</h3>
                                        <p className="text-muted-foreground">UI/UX Designer</p>
                                        <p className="text-muted-foreground">
                                            Jane is an experienced UI/UX designer who has worked on several disaster response applications.
                                            She is responsible for creating the intuitive and user-friendly interface for our platform.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">SM</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Sarah Musk</h3>
                                        <p className="text-muted-foreground">Data Analyst</p>
                                        <p className="text-muted-foreground">
                                            Sarah is a data analyst with expertise in geospatial analysis and data visualization. She is
                                            responsible for integrating and analyzing the various data sources to provide meaningful insights
                                            to emergency responders.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-muted text-4xl flex items-center justify-center">TL</div>
                                    <div>
                                        <h3 className="text-lg font-medium">Tom Lark</h3>
                                        <p className="text-muted-foreground">Backend Developer</p>
                                        <p className="text-muted-foreground">
                                            Tom is a skilled backend developer who has experience building scalable and secure web
                                            applications. He is responsible for developing the server-side components of our disaster response
                                            platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Challenges and Learnings</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl">
                                Developing a comprehensive disaster response platform presented several challenges, including
                                integrating diverse data sources, ensuring real-time data updates, and designing an intuitive user
                                interface. However, our team was able to overcome these obstacles through effective collaboration,
                                research, and iterative development. We learned valuable lessons about building resilient systems,
                                leveraging emerging technologies, and prioritizing user needs in crisis situations.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}