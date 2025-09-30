const peri = document.getElementById('periodo');
const momentosBtn = document.getElementById('memento');
const text = document.getElementById('txt');
const btnLogin = document.getElementById("BTNlogin");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const momentos = document.getElementById("momentos");
const btnGuardar = document.getElementById("BTNguardar");
const btnCancelar = document.getElementById("BTNcancelar");

// --- Nuevo botón logout ---
const btnLogout = document.createElement("button");
btnLogout.id = "BTNlogout";
btnLogout.innerText = "Logout";
btnLogout.style.display = "none";
document.body.appendChild(btnLogout);

const USER = "lautaro";
const PASS = "1234";
let periVisible = false;
let momentosVisible = false;

// --- Botón Periodos ---
peri.addEventListener("click", () => {
  if (!periVisible) {
    text.innerHTML = `
      <p><strong>Periodos históricos de Japón</strong></p>
      <ul>
    <li>
      <h3>Prehistoria</h3>
      <ul>
        <li>
          <h3>Paleolítico (hasta circa 11,000 a.C.)</h3>
          <p>Primeros habitantes humanos en el archipiélago japonés.</p>
        </li>
        <li>
          <h3>Período Jōmon (circa 14,000 - 300 a.C.)</h3>
          <p>Culturas de cazadores-recolectores con cerámica característica, considerada la más antigua del mundo.</p>
        </li>
        <li>
          <h3>Período Yayoi (300 a.C. - 300 d.C.)</h3>
          <p>Introducción de la agricultura, uso de herramientas de metal, aparición de los primeros cacicazgos.</p>
        </li>
        <li>
          <h3>Período Kofun (circa 300-710)</h3>
          <p>Formación de estados y cementerios megalíticos, crecimiento del poder del clan Yamato.</p>
        </li>
      </ul>
    </li>

    <li>
      <h3>Época Antigua</h3>
      <ul>
        <li>
          <h3>Período Asuka (538-710)</h3>
          <p>Influencias culturales importantes del budismo y China, establecimiento del sistema imperial.</p>
        </li>
        <li>
          <h3>Período Nara (710-794)</h3>
          <p>Primera capital permanente en Nara, consolidación del estado japonés centralizado.</p>
        </li>
        <li>
          <h3>Período Heian (794-1185)</h3>
          <p>Traslado de la capital a Heian (Kioto), florecimiento cultural y literario, poder aristocrático.</p>
        </li>
      </ul>
    </li>

    <li>
      <h3>Época Medieval</h3>
      <ul>
        <li>
          <h3>Período Kamakura (1185-1333)</h3>
          <p>Dominio de la clase samurái, establecimiento del shogunato Kamakura.</p>
        </li>
        <li>
          <h3>Período Muromachi (1336-1573)</h3>
          <p>Conflictos internos y guerras civiles, desarrollo cultural, consolidación del poder feudal.</p>
        </li>
        <li>
          <h3>Período Azuchi-Momoyama (1573-1603)</h3>
          <p>Reunificación del país tras la era de guerras, liderazgo de Oda Nobunaga y Toyotomi Hideyoshi.</p>
        </li>
      </ul>
    </li>

    <li>
      <h3>Época Moderna Temprana</h3>
      <ul>
        <li>
          <h3>Período Edo (1603-1868)</h3>
          <p>Era de paz y aislamiento bajo el shogunato Tokugawa, desarrollo económico y cultural interno, Edo (Tokio) como capital.</p>
        </li>
      </ul>
    </li>

    <li>
      <h3>Modernidad</h3>
      <ul>
        <li>
          <h3>Período Meiji (1868-1912)</h3>
          <p>Restauración del poder imperial, fin del feudalismo, rápida modernización, industrialización y occidentalización.</p>
        </li>
        <li>
          <h3>Períodos Taishō (1912-1926) y Shōwa (1926-1989)</h3>
          <p>Expansión militar y conflictos mundiales, posterior reconstrucción tras la Segunda Guerra Mundial, alto crecimiento económico.</p>
        </li>
        <li>
          <h3>Períodos Heisei (1989-2019) y Reiwa (2019-presente)</h3>
          <p>Sociedad contemporánea, economía avanzada y adaptaciones globales en política y cultura.</p>
        </li>
      </ul>
    </li>
  </ul>`;
  } else {
    text.innerHTML = "";
  }
  periVisible = !periVisible;
});

// --- Botón Momentos importantes ---
momentosBtn.addEventListener("click", () => {
  if (!momentosVisible) {
    if (localStorage.getItem("momentosText")) {
      momentos.innerText = localStorage.getItem("momentosText");
    } else {
      momentos.innerText = "Aquí aparecerán los momentos importantes de Japón.";
    }
    momentos.style.display = "block";
  } else {
    momentos.style.display = "none";
  }
  momentosVisible = !momentosVisible;
});

// --- Mostrar formulario al presionar Login ---
btnLogin.addEventListener("click", () => {
  loginForm.style.display = "block";
});

// --- Procesar login ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === USER && password === PASS) {
    sessionStorage.setItem("isLoggedIn", "true");
    habilitarEdicion();
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});

// --- Habilitar edición ---
function habilitarEdicion() {
  momentos.contentEditable = true;
  btnGuardar.style.display = "inline-block";
  btnCancelar.style.display = "inline-block";
  btnLogout.style.display = "inline-block";
  loginForm.style.display = "none";
  btnLogin.style.display = "none";
  alert("Ya puedes editar el contenido de 'Momentos importantes de Japón'.");
}

// --- Guardar cambios ---
btnGuardar.addEventListener("click", () => {
  localStorage.setItem("momentosText", momentos.innerText);
  alert("Cambios guardados correctamente.");
});

// --- Cancelar cambios ---
btnCancelar.addEventListener("click", () => {
  if (localStorage.getItem("momentosText")) {
    momentos.innerText = localStorage.getItem("momentosText");
  } else {
    momentos.innerText = "Aquí aparecerán los momentos importantes de Japón.";
  }
  alert("Cambios cancelados.");
});

// --- Logout ---
btnLogout.addEventListener("click", () => {
  let guardar = confirm("¿Querés guardar los cambios antes de salir?");
  if (guardar) {
    localStorage.setItem("momentosText", momentos.innerText);
  }
  sessionStorage.removeItem("isLoggedIn");

  momentos.contentEditable = false;
  btnGuardar.style.display = "none";
  btnCancelar.style.display = "none";
  btnLogout.style.display = "none";
  btnLogin.style.display = "inline-block";

  alert("Sesión cerrada.");
});

// --- Resetear login al refrescar ---
window.addEventListener("load", () => {
  sessionStorage.removeItem("isLoggedIn");
  momentos.contentEditable = false;
  btnGuardar.style.display = "none";
  btnCancelar.style.display = "none";
  btnLogout.style.display = "none";
});
