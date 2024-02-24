import Link from "next/link";
import "./globals.css";
import LinkTitle from "@/components/link-title";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
            <body>
                <div className="fixed inset-0 -z-[1] w-full h-full bg-linear-blue"></div>

                <div className="flex gap-5 px-8 py-5">
                    <div className="w-[200px] pb-16 overflow-x-hidden">
                        <Link href='/'
                            className="h-[67px] flex items-center gap-3 pl-5
                                border-b border-[#ffffff14]">
                            <img src="./img/logo.png" 
                                alt="Logo apps" 
                                className="w-6"/>
                            <span className="text-lg text-white capitalize">admin</span>
                        </Link>

                        <nav>
                            <ul>
                                <li>
                                    <Link href="/table">table</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex-1 bg-slate-100 rounded-[30px] px-[22px] pb-10">
                        <div className="h-[67px] flex justify-between items-center 
                            border-b border-slate-200">
                            <LinkTitle></LinkTitle>
                        </div>

                        {children}
                    </div>
                </div>  
            </body>
        </html>
    );
}
