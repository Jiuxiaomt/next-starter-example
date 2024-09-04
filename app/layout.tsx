import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from "@/app/ui/dashboard/sidenav";
import AcmeLogo from "@/app/ui/acme-logo";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>
      {/*<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">*/}
      {/*    <AcmeLogo/>*/}
      {/*</div>*/}
      {children}
      </body>
      </html>
  );
    // return (
    //     <html lang="en">
    //     <body>
    //     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //         <div className="w-full flex-none md:w-64">
    //             <SideNav/>
    //         </div>
    //         <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    //     </div>
    //     </body>
    //     </html>
    // );
}