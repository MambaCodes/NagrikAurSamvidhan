import React from "react";
import { FolderGit2, CalendarIcon, GithubIcon, HomeIcon, LinkedinIcon, MailIcon, PencilIcon, TwitterIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { PersonIcon } from "@radix-ui/react-icons";


const DATA = {
    navbar: [
        { href: "/home", icon: HomeIcon, label: "Home" },
        { href: "/about", icon: FolderGit2, label: "About Project" },
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "#",
                icon: GithubIcon,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "#",
                icon: LinkedinIcon,
            },
            X: {
                name: "X",
                url: "#",
                icon: TwitterIcon,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: MailIcon,
            },
        },
    },
};

export function MainNav() {
    return (
        <div className="relative flex w-full pb-6 flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={item.href}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full",
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full",
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2" />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ModeToggle className="rounded-full" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
