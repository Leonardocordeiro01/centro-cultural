import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { NoticiasFacebook } from "./stylesnoticias";
import Footer from "../components/footer";

export default function NoticiasFecebook() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v17.0";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <NoticiasFacebook>
        <Navbar />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="fb-root"></div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/PrefeituradeRioClaroRJ/?locale=pt_BR"
            data-tabs="timeline"
            data-width="600"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>
      </NoticiasFacebook>
      <Footer />
    </div>
  );
}
