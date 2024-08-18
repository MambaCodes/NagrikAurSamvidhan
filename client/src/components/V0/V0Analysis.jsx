
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart, Area, AreaChart, Bar, BarChart, Pie, PieChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Link } from "react-router-dom"
import { Success2Delivery } from "../charts/Success2Delivery"




export default function V0Analysis() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Tabs defaultValue="drivers">
                    <TabsList>
                        <TabsTrigger value="drivers">Drivers</TabsTrigger>
                        <TabsTrigger value="depots">Depots</TabsTrigger>
                        <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                        <TabsTrigger value="products">Products</TabsTrigger>
                    </TabsList>

                    {/* Drivers Content */}
                    <TabsContent value="drivers">
                        <Card className="h-full w-full">
                            <CardHeader>
                                <CardTitle>Drivers</CardTitle>
                                <CardDescription>Analyze the performance of your delivery drivers.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Success2Delivery />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Depots Conent */}
                    <TabsContent value="depots">
                        <Card className="h-full w-full">
                            <CardHeader>
                                <CardTitle>Depots</CardTitle>
                                <CardDescription>Evaluate the integrity of your delivery depots.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LinechartChart className="aspect-[16/9]" />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Vehicles Content */}
                    <TabsContent value="vehicles">
                        <Card className="h-full w-full overflow-hidden">
                            <CardHeader>
                                <CardTitle>Vehicles</CardTitle>
                                <CardDescription>Monitor the performance and maintenance of your delivery vehicles.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <LinechartChart className="aspect-[16/9]" />
                                    <AreachartChart className="aspect-[16/9]" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Products Content */}
                    <TabsContent value="products">
                        <Card className="h-full w-full">
                            <CardHeader>
                                <CardTitle>Products</CardTitle>
                                <CardDescription>Analyze the delivery performance and user feedback for your products.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <BarchartChart className="aspect-[16/9]" />
                                    <PiechartcustomChart className="aspect-[16/9]" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

function AreachartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
                className="min-h-[300px]"
            >
                <AreaChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}


function BarchartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
                className="min-h-[300px]"
            >
                <BarChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}


function DownloadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function FilterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}


function LinechartChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
            >
                <LineChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
        </div>
    )
}


function PiechartcustomChart(props) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    visitors: {
                        label: "Visitors",
                    },
                    chrome: {
                        label: "Chrome",
                        color: "hsl(var(--chart-1))",
                    },
                    safari: {
                        label: "Safari",
                        color: "hsl(var(--chart-2))",
                    },
                    firefox: {
                        label: "Firefox",
                        color: "hsl(var(--chart-3))",
                    },
                    edge: {
                        label: "Edge",
                        color: "hsl(var(--chart-4))",
                    },
                    other: {
                        label: "Other",
                        color: "hsl(var(--chart-5))",
                    },
                }}
            >
                <PieChart>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Pie
                        data={[
                            { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                            { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                            { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                            { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                            { browser: "other", visitors: 90, fill: "var(--color-other)" },
                        ]}
                        dataKey="visitors"
                        nameKey="browser"
                    />
                </PieChart>
            </ChartContainer>
        </div>
    )
}