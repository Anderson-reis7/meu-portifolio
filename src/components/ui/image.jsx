import profile from "@/assets/profile-hd.png";
import elevador from "@/assets/elevado-interativo.png";
import conversor from "@/assets/conversor-dinheiro.png";
import cifra from "@/assets/cifra-cesar.png";
import jokenpo from "@/assets/jokenpo.png";

function Projetos() {
  return (
    <div>
      <img src={profile} alt="Perfil" />
      <img src={elevador} alt="Elevador Interativo" />
      <img src={conversor} alt="Conversor de Dinheiro" />
      <img src={cifra} alt="Cifra de César" />
      <img src={jokenpo} alt="Jokenpô" />
    </div>
  );
}

export {Projetos};