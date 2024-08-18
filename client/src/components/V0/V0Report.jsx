import V0Analysis from "./V0Analysis";

export default function V0Report() {
    return (
        <div className="grid gap-8 md:gap-12 px-4 md:px-6 py-8 md:py-12 max-w-6xl mx-auto mb-14">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                <div>
                    <img
                        src="/samsung-65.jpg" // Replace with actual image path
                        alt="Samsung 65' 4K Ultra HD Smart TV"
                    width={400}
                    height={400}
                    className="h-1/2 w-auto aspect-square object-cover border  rounded-lg overflow-hidden"
                    />
                </div>
                <div className="grid gap-4 md:gap-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Samsung 65" 4K Ultra HD Smart TV</h1>
                        <p className="text-muted-foreground">
                            The customer reported that the TV screen had dead pixels and was cracked upon arrival.
                        </p>
                    </div>
                    <div className="grid gap-2 md:gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-base font-medium">Parameter 1</h3>
                                <p className="text-2xl md:text-3xl font-bold">100</p>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">Parameter 2</h3>
                                <p className="text-2xl md:text-3xl font-bold">50</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-base font-medium">Parameter 3</h3>
                                <p className="text-2xl md:text-3xl font-bold">75</p>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">Parameter 4</h3>
                                <p className="text-2xl md:text-3xl font-bold">25</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-base font-medium">Parameter 3</h3>
                                <p className="text-2xl md:text-3xl font-bold">75</p>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">Parameter 4</h3>
                                <p className="text-2xl md:text-3xl font-bold">25</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-base font-medium">Parameter 3</h3>
                                <p className="text-2xl md:text-3xl font-bold">75</p>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">Parameter 4</h3>
                                <p className="text-2xl md:text-3xl font-bold">25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-4 md:gap-6">
                <h2 className="text-xl md:text-2xl font-bold">ML Model Analysis</h2>
                <div className="grid gap-4 md:gap-6">
                    <div>
                        <h3 className="text-base font-medium">Key Insights</h3>
                        <p>
                            The analysis revealed that the dead pixels issue is a common defect in certain batches, while the crack was likely caused by mishandling during transit.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-base font-medium">Recommendations</h3>
                        <p>
                            It is recommended to improve packaging for better protection during shipping and to perform additional quality checks to identify potential defects before dispatch.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-base font-medium">Accuracy and Confidence</h3>
                        <p>
                            The model's accuracy in detecting screen defects is 85%, with a confidence level of 90% for identifying cracks and dead pixels.
                        </p>
                    </div>
                </div>
            </div>
            <V0Analysis/>
        </div>
    )
}
