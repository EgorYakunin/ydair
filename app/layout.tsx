import "@/styles/global.css";
import Navigation from "@/components/Navigation";
import Spacer from "@/components/std/Spacer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navigation />
                <Spacer top="8"/>
                {children}
            </body>
        </html>
    );
}
