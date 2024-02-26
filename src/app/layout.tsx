import "./globals.css";
import Image from "next/image";
import Logo from "@/components/logo";
import ListNav from "@/components/navigation/listNav";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
            <body>
                <div className="fixed inset-0 -z-[1] w-full h-full bg-linear-blue"></div>

                <div className="flex gap-5 px-8 py-5">
                    <div className="w-[210px] flex flex-col gap-6
                        pb-16 ">
                        <Logo></Logo>
                        <ListNav></ListNav>
                    </div>

                    <div className="bg-slate-100 flex flex-1 flex-col gap-8
                        rounded-[30px] px-[22px] pb-10">
                        <div
                            className="h-[67px] flex justify-between items-center
                                border-b border-slate-200">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl text-slate-800 font-medium capitalize">welcome reosta pratama</h2>
                                <Image src="/img/hand.gif"
                                    alt="Animation hand"
                                    width={24}
                                    height={24}
                                    loading="lazy">
                                </Image>
                            </div>
                        </div>

                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
