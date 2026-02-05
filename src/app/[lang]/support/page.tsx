import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function SupportPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: "80px" }}>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
