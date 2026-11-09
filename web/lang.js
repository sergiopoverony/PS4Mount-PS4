/* Texts of both panel pages in other languages, by their English text (English is the
 * page itself, and the fallback for a text a table lacks). build.sh puts this file in
 * the pages where they say <!--LANG-->. A new language: a table here and its tag in
 * src/lang.c. ES5 only: the browser of older firmwares reads it too. */
var LANGS = {
  es: {
    /* fixed texts of the pages */
    'Search game or CUSA': 'Buscar juego o CUSA',
    'Scan for games': 'Buscar juegos',
    'Send games': 'Enviar juegos',
    'Settings': 'Ajustes',
    'Log': 'Log',
    'Stop': 'Detener',
    'Games': 'Juegos',
    'Back': 'Volver',
    'Save': 'Guardar',
    'Cancel': 'Cancelar',
    'Close': 'Cerrar',
    'No PS4 games found. Put the .pkg files (game, update and add-ons) in the PS4Mount folder of a USB drive, or send them with Send games.':
      'No hay juegos de PS4. Pon los .pkg (juego, actualización y DLC) en la carpeta PS4Mount de un USB, o envíalos con Enviar juegos.',
    'No PS4 games found. Put the .pkg files (game, update and add-ons) in the PS4Mount folder of a USB drive.':
      'No hay juegos de PS4. Pon los .pkg (juego, actualización y DLC) en la carpeta PS4Mount de un USB.',
    'Adding games': 'Añadir juegos',
    'Folders to search for pkgs (one per line, relative to each drive)':
      'Carpetas donde buscar pkgs (una por línea, dentro de cada unidad)',
    '/ is the root of the drive. The ps4 folder holds organized games, so it cannot be used here.':
      '/ es la raíz de la unidad. La carpeta ps4 guarda los juegos organizados, así que no se puede usar aquí.',
    '/ is the root of the drive. Games are moved into the ps4 folder, so it cannot be used here.':
      '/ es la raíz de la unidad. Los juegos se mueven a la carpeta ps4, así que no se puede usar aquí.',
    'Add new games in groups': 'Añadir los juegos nuevos por grupos',
    'Games per group': 'Juegos por grupo',
    'Smaller groups are gentler on the system when many games are added at once.':
      'Los grupos pequeños cargan menos el sistema cuando se añaden muchos juegos a la vez.',
    'Install add-ons (DLC)': 'Instalar DLC',
    'Organize pkgs into the ps4 folder': 'Organizar los pkgs en la carpeta ps4',
    'On (the default): the .pkg files are moved into ps4/<title ID>/ on the drive, so the console\'s own installer does not find them again. Off: they are used where they are, anywhere on the drive, and are not renamed or moved.':
      'Activado (por defecto): los .pkg se mueven a ps4/<ID del título>/ en la unidad, así el instalador de la consola no los encuentra otra vez. Desactivado: se usan donde están, en cualquier parte de la unidad, sin renombrarlos ni moverlos.',
    'Off (the default): the .pkg files are used where they are, anywhere on the drive, grouped by their title ID. They are not renamed or moved; the games PS4Mount organized before go back to where they were.':
      'Apagado (por defecto): los .pkg se usan donde están, en cualquier parte de la unidad, agrupados por su título. No se renombran ni se mueven; los juegos que PS4Mount organizó antes vuelven a su sitio.',
    "Read the console's log (game start and stop)": 'Leer el log de la consola (inicio y fin de juego)',
    "On by default. Turn it off to leave the log to another payload: AnyPad needs it to tell its virtual pad apart, and only one payload can read it. Games in play are then noticed a few seconds later, from their mount.":
      'Activado por defecto. Desactivalo para dejarle el log a otro payload: AnyPad lo necesita para distinguir su pad virtual, y solo un payload puede leerlo. Los juegos en marcha se notan unos segundos más tarde, por su montaje.',
    "Also use pkgs in the console's /data/PS4Mount": 'Usar también los pkgs de /data/PS4Mount de la consola',
    "Pkgs sent to the console's storage are added from there, with no install to wait for. They still take internal space.":
      'Los pkgs enviados a la memoria de la consola se añaden desde ahí, sin esperar una instalación. Ocupan espacio interno.',
    "Add the games found by a scan by themselves": 'Añadir por sí solos los juegos que encuentra la búsqueda',
    "Off: a scan only lists the games, and the ones you press Add to library on are added. Games already in the library are kept up to date either way.":
      'Apagado: la búsqueda solo lista los juegos y se añaden los que pulsas Añadir a la biblioteca. Los juegos que ya están en la biblioteca se mantienen al día en ambos casos.',
    "Also search /data/pkg and all its subfolders": 'Buscar también en /data/pkg y todas sus subcarpetas',
    "Needs the switch above on. The pkgs stay where they are, even with \"Organize pkgs\" on. Games the console already installed are skipped. Restart the console once after the first games are added.":
      'Necesita el ajuste de arriba activado. Los pkgs se quedan donde están, aunque "Organizar los pkgs" esté activado. Los juegos que la consola ya instaló se omiten. Reinicia la consola una vez después de añadir los primeros juegos.',
    'NAS (NFS or SMB)': 'NAS (NFS o SMB)',
    'Not available on this firmware: there is no FUSE patch for it.': 'No disponible en este firmware: no hay parche de FUSE para él.',
    "Experimental on this firmware: its FUSE patch is itemzflow's and was not tried with PS4Mount (it was on 13.52 and 6.72). If the console freezes when the share is mounted, restart it and turn the NAS off.":
      'Experimental en este firmware: su parche de FUSE es el de itemzflow y no se ha probado con PS4Mount (sí en 13.52 y 6.72). Si la consola se cuelga al montar el recurso, reiníciala y apaga el NAS.',
    'Use a network share (read only)': 'Usar un recurso de red (solo lectura)',
    'Firmware 5.05 to 13.52, and only with pkgs used where they are: the share is never renamed or moved. It needs a wired console or a good Wi-Fi: games read at the speed of the network.':
      'Firmware 5.05 a 13.52, y solo con los pkgs usados donde están: el recurso nunca se renombra ni se mueve. Hace falta la consola por cable o un buen Wi-Fi: los juegos leen a la velocidad de la red.',
    'Protocol': 'Protocolo',
    'Server': 'Servidor',
    'Export (NFS) or share (SMB)': 'Exportación (NFS) o recurso (SMB)',
    'Folder inside it': 'Carpeta dentro',
    'Port': 'Puerto',
    'User (SMB)': 'Usuario (SMB)',
    'Password (SMB)': 'Contraseña (SMB)',
    'Remove several': 'Quitar varios',
    "Console storage: turn on \"Also use pkgs in the console's /data/PS4Mount\" in Settings":
      'Memoria de la consola: activa "Usar también los pkgs de /data/PS4Mount de la consola" en Ajustes',
    'Remove games from the library': 'Quitar juegos de la biblioteca',
    "The chosen games leave the console's home screen. Their pkgs stay where they are: nothing is deleted, and Add to library brings each one back.":
      'Los juegos elegidos salen de la pantalla de inicio de la consola. Sus pkgs se quedan donde están: no se borra nada, y Añadir a la biblioteca devuelve cada uno.',
    'Remove the chosen ones': 'Quitar los elegidos',
    'No games to remove (an open game is closed first)': 'No hay juegos que quitar (cierra antes el juego abierto)',
    'Remove {0} game(s) from the library? Their pkgs stay where they are.': '¿Quitar {0} juego(s) de la biblioteca? Sus pkgs se quedan donde están.',
    '{0} removed; not removed: {1}': '{0} quitado(s); sin quitar: {1}',
    '{0} game(s) removed from the library': '{0} juego(s) quitado(s) de la biblioteca',
    'Removing {0} of {1}…': 'Quitando {0} de {1}…',
    'First start: check the settings (which folders, games per group, add-ons) and press Save in Settings. While this page is open no game is added; closed for 2 minutes without saving, the default settings are used.':
      'Primera vez: revisa los ajustes (qué carpetas, juegos por grupo, DLC) y pulsa Guardar en Ajustes. Mientras esta página esté abierta no se añade ningún juego; si se cierra 2 minutos sin guardar, se usan los ajustes por defecto.',
    'Look for new games on it': 'Buscar juegos nuevos en él',
    'Every minute': 'Cada minuto',
    'Every 10 minutes': 'Cada 10 minutos',
    'Every hour': 'Cada hora',
    'Only with Scan for games': 'Solo con Buscar juegos',
    'saved': 'guardada',
    "Find servers on the network":
      "Buscar servidores en la red",
    "List the server's shares":
      "Ver los recursos del servidor",
    "How to share a folder from a computer or a NAS":
      "Cómo compartir una carpeta desde un ordenador o un NAS",
    "Windows:":
      "Windows:",
    "right-click the folder, Properties, Sharing, Advanced Sharing, tick \"Share this folder\". Then fill in User and Password here with your Windows account. If the console does not find the PC, set its network as Private.":
      "clic derecho en la carpeta, Propiedades, Compartir, Uso compartido avanzado, marca «Compartir esta carpeta». Luego pon aquí en Usuario y Contraseña tu cuenta de Windows. Si la consola no encuentra el PC, pon su red como Privada.",
    "macOS:":
      "macOS:",
    "System Settings, General, Sharing: turn on File Sharing and add the folder. In Options, turn on SMB sharing for your user, and use that user and password here.":
      "Ajustes del Sistema, General, Compartir: activa Compartir archivos y añade la carpeta. En Opciones, activa compartir por SMB para tu usuario, y usa aquí ese usuario y contraseña.",
    "Linux:":
      "Linux:",
    "share the folder with Samba (read only, guest allowed) or NFS (/etc/exports), and let the console's address through the firewall.":
      "comparte la carpeta con Samba (solo lectura, invitado permitido) o NFS (/etc/exports), y deja pasar la dirección de la consola en el cortafuegos.",
    "NAS box":
      "Caja NAS",
    "(Synology, QNAP, a router with USB): turn on SMB file sharing in its settings and give the shared folder read access.":
      "(Synology, QNAP, un router con USB): activa compartir archivos por SMB en sus ajustes y da permiso de lectura a la carpeta compartida.",
    "A cable is much faster than Wi-Fi. With no switch or free router port, a cable straight from the computer to the console works too: share the computer's internet connection on that cable.":
      "Un cable es mucho más rápido que el Wi-Fi. Si no tienes switch ni un puerto libre en el router, también sirve un cable directo del ordenador a la consola: comparte la conexión a internet del ordenador por ese cable.",
    "Looking for servers on the console's network...":
      "Buscando servidores en la red de la consola...",
    "Choose a server:":
      "Elige un servidor:",
    "No server found. Check that the computer or NAS is on, on the same network as the console, shares a folder, and that its firewall allows file sharing.":
      "No se encontró ningún servidor. Comprueba que el ordenador o el NAS esté encendido, en la misma red que la consola, que comparta una carpeta y que su cortafuegos permita compartir archivos.",
    "Find a server first, or type its address in Server.":
      "Busca primero un servidor, o escribe su dirección en Servidor.",
    "Asking {0} what it shares...":
      "Preguntando a {0} qué comparte...",
    "Fill in User and Password, then press \"List the server's shares\".":
      "Rellena Usuario y Contraseña y pulsa «Ver los recursos del servidor».",
    "Choose the shared folder with your games:":
      "Elige la carpeta compartida con tus juegos:",
    "This server shares no folders.":
      "Este servidor no comparte ninguna carpeta.",
    "Ready: press Save to use it.":
      "Listo: pulsa Guardar para usarlo.",
    'Turn on BinLoader (port 9090) in GoldHEN to use the share.':
      'Enciende BinLoader (puerto 9090) en GoldHEN para usar el recurso.',
    'guest': 'invitado',
    'Language': 'Idioma',
    'Restore original files': 'Restaurar archivos originales',
    'Takes games off the console and puts their pkgs (game, update and add-ons) back where they were, with the names they had. Nothing is deleted. The open game is closed first.':
      'Quita juegos de la consola y vuelve a dejar sus pkgs (juego, actualización y DLC) donde estaban, con el nombre que tenían. No se borra nada. Antes se cierra el juego abierto.',
    'Takes the game off the console and puts its pkgs back where they were, with the names they had. Nothing is deleted.':
      'Quita el juego de la consola y vuelve a dejar sus pkgs donde estaban, con el nombre que tenían. No borra nada.',
    'Restore the files of all games': 'Restaurar los archivos de todos los juegos',
    'Restore the files of chosen games': 'Restaurar los archivos de los juegos elegidos',
    'Use restored pkgs again': 'Volver a usar los pkgs restaurados',
    'Each chosen game gets its pkgs back where they were, with its update and all its add-ons. The open game is closed first.':
      'A cada juego elegido se le devuelven sus pkgs donde estaban, con su actualización y todos sus DLC. Antes se cierra el juego abierto.',
    'Files': 'Archivos',
    'Restore the chosen ones': 'Restaurar los elegidos',
    'Restore the original files of {0}?\n\nThe game leaves the console and its pkgs (game, update and add-ons) go back where they were, with the names they had. The open game is closed first. PS4Mount stops using these pkgs. Nothing is deleted.':
      '¿Restaurar los archivos originales de {0}?\n\nEl juego sale de la consola y sus pkgs (juego, actualización y DLC) vuelven donde estaban, con el nombre que tenían. Antes se cierra el juego abierto. PS4Mount deja de usar esos pkgs. No se borra nada.',
    'WARNING: this restores the original files of ALL {0} games: their pkgs (game, update and add-ons) go back where they were, with the names they had.\n\nThe open game is closed now, without saving. All PS4Mount games leave the console, {1} at a time, and PS4Mount stops using these pkgs. Nothing is deleted.\n\nContinue?':
      'ATENCIÓN: esto restaura los archivos originales de LOS {0} juegos: sus pkgs (juego, actualización y DLC) vuelven donde estaban, con el nombre que tenían.\n\nEl juego abierto se cierra ahora, sin guardar. Todos los juegos de PS4Mount salen de la consola, de {1} en {1}, y PS4Mount deja de usar esos pkgs. No se borra nada.\n\n¿Continuar?',
    'Restore the original files of {0} game(s), each with its update and all its add-ons?\n\nThe open game is closed now, without saving. The games leave the console{1}. Nothing is deleted.':
      '¿Restaurar los archivos originales de {0} juego(s), cada uno con su actualización y todos sus DLC?\n\nEl juego abierto se cierra ahora, sin guardar. Los juegos salen de la consola{1}. No se borra nada.',
    'Use the restored pkgs again? They are moved into the ps4 folder and added on the next scan.':
      '¿Volver a usar los pkgs restaurados? Se moverán a la carpeta ps4 y se añadirán en la próxima búsqueda.',
    "The console's": 'El de la consola',
    'Games removed from the library per group (1 to': 'Juegos que salen de la biblioteca por grupo (1 a',
    'Select all': 'Elegir todos',
    'Game': 'Juego',
    'Pick the pkgs on this computer. Each one is checked first (it takes a second): only pkgs this console can use are sent, so no transfer ends in a game that does not start. They are added to the library when they arrive.':
      'Elige los pkgs de este equipo. Cada uno se comprueba antes (tarda un segundo): solo se envían los que esta consola puede usar, así ningún envío acaba en un juego que no arranca. Se añaden a la biblioteca al llegar.',
    'Drop .pkg files here, or click to pick them': 'Suelta aquí los .pkg, o pulsa para elegirlos',
    'Send to': 'Enviar a',
    'Cancel transfer': 'Cancelar el envío',
    'Send': 'Enviar',
    /* Google Drive */
    'uploading to Drive ({0}%)': 'subiendo a Drive ({0} %)',
    'downloading from Drive ({0}%)': 'descargando de Drive ({0} %)',
    'waiting to go to Drive': 'en cola para subir a Drive',
    'waiting to come from Drive': 'en cola para bajar de Drive',
    'reading again what already arrived…': 'releyendo lo que ya llegó…',
    'reading again what Drive already has…': 'releyendo lo que Drive ya tiene…',
    'Google Drive asks to connect again: open {0} and type {1}': 'Google Drive pide conectar de nuevo: abre {0} y escribe {1}',
    'The transfer goes on once you do': 'La transferencia sigue en cuanto lo hagas',
    '{0} of {1}': '{0} de {1}',
    'connection lost, trying again in {0} s': 'se cortó la conexión, reintento en {0} s',
    'checking the file…': 'comprobando el archivo…',
    '{0} left': 'quedan {0}',
    'measuring the speed…': 'midiendo la velocidad…',
    'running for {0}': 'lleva {0}',
    'less than a minute': 'menos de un minuto',
    'First, your own Google client (once). PS4Mount comes with none: yours stays on this console only.':
      'Primero, tu propio cliente de Google (una sola vez). PS4Mount no trae ninguno: el tuyo se queda solo en esta consola.',
    'Open': 'Abre',
    ', create a project and enable the Google Drive API.': ', crea un proyecto y activa la Google Drive API.',
    'In Google Auth Platform (OAuth consent screen): audience External, and add your Google email in Audience → Test users (the app stays in Testing).':
      'En Google Auth Platform (pantalla de consentimiento OAuth): público Externo, y añade tu correo de Google en Público → Usuarios de prueba (la app se queda en Prueba).',
    'In Clients (Credentials), create an OAuth client of type TVs and Limited Input devices, and copy its client ID and secret here.':
      'En Clientes (Credenciales), crea un cliente OAuth de tipo TV y dispositivos de entrada limitada, y copia aquí su ID de cliente y su secreto.',
    'Client ID': 'ID de cliente',
    'Client secret': 'Secreto del cliente',
    'Change': 'Cambiar',
    'Your Google client: {0}': 'Tu cliente de Google: {0}',
    'Google Drive': 'Google Drive',
    'console.cloud.google.com': 'console.cloud.google.com',
    'Back up to Drive': 'Copia en Drive',
    'Connect Google Drive': 'Conectar Google Drive',
    'Copies of your games in your own Google Drive: back up the library, send a game, and download it back to any drive of the console. PS4Mount can only see the files it puts in Drive (folder PS4Mount), nothing else of your Drive.':
      'Copias de tus juegos en tu propio Google Drive: haz una copia de la biblioteca, envía un juego y descárgalo después a cualquier unidad de la consola. PS4Mount solo puede ver los archivos que él pone en Drive (carpeta PS4Mount), nada más de tu Drive.',
    'On your phone or computer, open': 'En el móvil o el ordenador, abre',
    'and type this code:': 'y escribe este código:',
    'Waiting for you to allow it in your Google account…': 'Esperando a que lo permitas en tu cuenta de Google…',
    'Connect': 'Conectar',
    'Back up the library': 'Copiar la biblioteca',
    'Refresh': 'Actualizar',
    'Disconnect': 'Desconectar',
    'Download to': 'Descargar en',
    'In Drive': 'En Drive',
    'Send to Drive': 'Enviar a Drive',
    'Send to Drive again': 'Enviar a Drive de nuevo',
    'In Google Drive': 'En Google Drive',
    'in Drive ({0})': 'en Drive ({0})',
    'not in Drive': 'no está en Drive',
    'Uploading {0} to Drive': 'Subiendo {0} a Drive',
    'Downloading {0} from Drive': 'Descargando {0} de Drive',
    'Moving {0} to the Drive trash': 'Moviendo {0} a la papelera de Drive',
    'Reading Google Drive': 'Leyendo Google Drive',
    'Asking Google for a code': 'Pidiendo un código a Google',
    '{0} more waiting': '{0} más en espera',
    '{0} of {1} used': '{0} de {1} usados',
    '{0} used': '{0} usados',
    'on the console': 'en la consola',
    'Download': 'Descargar',
    'Delete from Drive': 'Borrar de Drive',
    "Nothing in Google Drive yet: use Back up the library, or Send to Drive on a game's page.":
      'Aún no hay nada en Google Drive: usa Copiar la biblioteca, o Enviar a Drive en la ficha de un juego.',
    'Disconnect Google Drive? The copies stay in your Drive; PS4Mount forgets the account.':
      '¿Desconectar Google Drive? Las copias se quedan en tu Drive; PS4Mount olvida la cuenta.',
    'Back up the whole library to Google Drive? Games already there are skipped. The console must stay on (not in rest mode) until it ends.':
      '¿Copiar toda la biblioteca a Google Drive? Los juegos que ya están se saltan. La consola debe seguir encendida (no en reposo) hasta que termine.',
    'Stop the Drive transfer? An upload goes on from where it was the next time.':
      '¿Detener la transferencia de Drive? Una subida sigue desde donde iba la próxima vez.',
    'Move {0} to the Drive trash? The pkgs on the console stay.': '¿Mover {0} a la papelera de Drive? Los pkgs de la consola se quedan.',
    /* states */
    'Ready': 'Listo',
    'Restart to play': 'Reinicia para jugar',
    'Running': 'Abierto',
    'Not in library': 'Fuera de la biblioteca',
    'Installed on console': 'Instalado en la consola',
    'Adding': 'Añadiéndose',
    'On another drive': 'En otra unidad',
    'Drive not connected': 'Unidad no conectada',
    /* game cards and pages */
    'Add to library': 'Añadir a la biblioteca',
    'Remove from library': 'Quitar de la biblioteca',
    'Close the game to remove it': 'Cierra el juego para quitarlo',
    'Please wait…': 'Espera…',
    'Please wait...': 'Espera...',
    ' (with update)': ' (con actualización)',
    'mounted {0}': 'montado {0}',
    '1 add-on': '1 DLC',
    '{0} add-ons': '{0} DLC',
    'no add-ons': 'sin DLC',
    'Game{0}{1}': 'Juego{0}{1}',
    ', update': ', actualización',
    ' and {0}': ' y {0}',
    'Added. Restart the console once to play it.': 'Añadido. Reinicia la consola una vez para jugarlo.',
    'On {0}, which is not connected. Connect it to play.': 'En {0}, que no está conectado. Conéctalo para jugar.',
    '{0} game(s)': '{0} juego(s)',
    'State': 'Estado',
    'Version': 'Versión',
    'v{0} (game v{1} with its update)': 'v{0} (juego v{1} con su actualización)',
    'Add-ons': 'DLC',
    'none': 'ninguno',
    'Needs firmware': 'Necesita firmware',
    'unknown': 'desconocido',
    'Size': 'Tamaño',
    'On': 'En',
    'game': 'juego',
    'update': 'actualización',
    'add-on': 'DLC',
    'other': 'otro',
    /* messages */
    'Error: {0}': 'Error: {0}',
    "Also install big add-ons (over 256 MB)":
      "Instalar también los DLC grandes (más de 256 MB)",
    "A game only sees an add-on the system has installed: big ones are copied to the console's storage, in the background (a few minutes). Off, they are not used.":
      "Un juego solo ve un DLC que el sistema ha instalado: los grandes se copian a la memoria de la consola, en segundo plano (unos minutos). Apagado, no se usan.",
    "Ready to install":
      "Lista para instalar",
    "A homebrew app: it is sent to the console and installed with the system's installer, as by hand. The copy is deleted once it is installed.":
      "Una app homebrew: se envía a la consola y se instala con el instalador del sistema, como a mano. La copia se borra cuando queda instalada.",
    'Could not read the list: {0}': 'No se pudo leer la lista: {0}',
    'Could not read the settings: {0}': 'No se pudieron leer los ajustes: {0}',
    'Could not read the log: {0}': 'No se pudo leer el log: {0}',
    'Games per group must be a number from 1 to {0}': 'Los juegos por grupo deben ser un número de 1 a {0}',
    'Remove {0} from the library? Its pkgs stay where they are (deleting it on the console deletes them).':
      '¿Quitar {0} de la biblioteca? Sus pkgs se quedan donde están (borrarlo desde la consola sí los borra).',
    '{0} game(s) selected': '{0} juego(s) elegido(s)',
    ', removed from the library {0} at a time': ', salen de la biblioteca de {0} en {0}',
    'No games selected': 'No hay juegos elegidos',
    'No PS4Mount games on the connected drives': 'No hay juegos de PS4Mount en las unidades conectadas',
    ', {0} at a time': ', de {0} en {0}',
    '{0} free': '{0} libres',
    'No drive connected': 'No hay ninguna unidad conectada',
    'no place to send it to': 'no hay dónde enviarlo',
    'not enough space in {0}: {1} free, {2} needed': 'no hay espacio en {0}: {1} libres, {2} necesarios',
    'Checking…': 'Comprobando…',
    'Sending {0}%': 'Enviando {0}%',
    'Sent': 'Enviado',
    'Failed': 'Falló',
    'Cannot be used': 'No se puede usar',
    'Ready to send': 'Listo para enviar',
    'needs firmware {0}': 'necesita el firmware {0}',
    'Send again': 'Enviar de nuevo',
    'Remove': 'Quitar',
    'could not be checked: {0}': 'no se pudo comprobar: {0}',
    'the connection to the console was lost': 'se perdió la conexión con la consola',
    'cancelled': 'cancelado',
    'Cancel the transfer in progress?': '¿Cancelar el envío en curso?',
    'Stop PS4Mount? The games stay unavailable until it is loaded again.':
      '¿Detener PS4Mount? Los juegos no se podrán abrir hasta que se vuelva a cargar.',
    /* downloads from links */
    'Download links': 'Descargar enlaces',
    'The console downloads them itself (you can close this page): a pkg, a ZIP or a RAR, also in parts. Paste the direct links, the ones that start the download, one per line; all the parts of a RAR (name.part1.rar, name.part2.rar...) become one download. Its pkgs are added to the library when they arrive.':
      'La consola los descarga sola (puedes cerrar esta página): un pkg, un ZIP o un RAR, también en partes. Pega los enlaces directos, los que empiezan la descarga, uno por línea; todas las partes de un RAR (nombre.part1.rar, nombre.part2.rar...) son una sola descarga. Sus pkgs se añaden a la biblioteca al llegar.',
    'A link with no file name in it: add | and its name.': 'Un enlace sin nombre de archivo: añade | y su nombre.',
    'Password (if the archive has one)': 'Contraseña (si el archivo la tiene)',
    'Not needed for one that opened another download, nor for the site in brackets at the start of the name ([SITE]-game): those are tried by themselves.':
      'No hace falta si ya abrió otra descarga, ni si es el sitio entre corchetes al principio del nombre ([SITIO]-juego): esas se prueban solas.',
    'The password of the archive:': 'La contraseña del archivo comprimido:',
    'Save to': 'Guardar en',
    'Checking the links of {0}…': 'Comprobando los enlaces de {0}…',
    'through the browser': 'a través del navegador',
    'Downloading {0}': 'Descargando {0}',
    'Extracting {0}': 'Extrayendo {0}',
    'extracting {0}': 'extrayendo {0}',
    'downloading': 'descargando',
    'waiting': 'en espera',
    '{0} parts': '{0} partes',
    'Try again': 'Reintentar',
    'paste at least one link': 'pega al menos un enlace',
    'Remove this download? What it downloaded so far is deleted.': '¿Quitar esta descarga? Se borra lo que ya bajó.',
    'Cancel the download of {0}? What it downloaded so far is deleted.': '¿Cancelar la descarga de {0}? Se borra lo que ya bajó.'
  },
  ru: {
    "Search game or CUSA": "Поиск игры или CUSA",
    "Scan for games": "Искать игры",
    "Send games": "Отправить игры",
    "Settings": "Настройки",
    "Log": "Журнал",
    "Stop": "Остановить",
    "Games": "Игры",
    "Back": "Назад",
    "Save": "Сохранить",
    "Cancel": "Отмена",
    "Close": "Закрыть",
    "No PS4 games found. Put the .pkg files (game, update and add-ons) in the PS4Mount folder of a USB drive, or send them with Send games.": "Игры PS4 не найдены. Положите .pkg (игру, обновление и DLC) в папку PS4Mount на USB-накопителе или отправьте их через «Отправить игры».",
    "No PS4 games found. Put the .pkg files (game, update and add-ons) in the PS4Mount folder of a USB drive.": "Игры PS4 не найдены. Положите .pkg (игру, обновление и DLC) в папку PS4Mount на USB-накопителе.",
    "Adding games": "Добавление игр",
    "Folders to search for pkgs (one per line, relative to each drive)": "Папки для поиска pkg (по одной в строке, внутри каждого накопителя)",
    "/ is the root of the drive. The ps4 folder holds organized games, so it cannot be used here.": "/ — корень накопителя. В папке ps4 лежат упорядоченные игры, поэтому её здесь использовать нельзя.",
    "/ is the root of the drive. Games are moved into the ps4 folder, so it cannot be used here.": "/ — корень накопителя. Игры переносятся в папку ps4, поэтому её здесь использовать нельзя.",
    "Add new games in groups": "Добавлять новые игры группами",
    "Games per group": "Игр в группе",
    "Smaller groups are gentler on the system when many games are added at once.": "Небольшие группы меньше нагружают систему, когда сразу добавляется много игр.",
    "Install add-ons (DLC)": "Устанавливать дополнения (DLC)",
    "Organize pkgs into the ps4 folder": "Раскладывать pkg по папке ps4",
    "On (the default): the .pkg files are moved into ps4/<title ID>/ on the drive, so the console's own installer does not find them again. Off: they are used where they are, anywhere on the drive, and are not renamed or moved.": "Включено: файлы .pkg переносятся в ps4/<ID игры>/ на накопителе, чтобы установщик консоли не находил их снова. Выключено: они используются там, где лежат, в любой папке накопителя, без переименования и переноса.",
    "Off (the default): the .pkg files are used where they are, anywhere on the drive, grouped by their title ID. They are not renamed or moved; the games PS4Mount organized before go back to where they were.": "Выключено (по умолчанию): файлы .pkg используются там, где лежат, в любой папке накопителя, и группируются по ID игры. Они не переименовываются и не переносятся; игры, которые PS4Mount упорядочил раньше, возвращаются на прежние места.",
    "Read the console's log (game start and stop)": "Читать журнал консоли (запуск и закрытие игр)",
    "On by default. Turn it off to leave the log to another payload: AnyPad needs it to tell its virtual pad apart, and only one payload can read it. Games in play are then noticed a few seconds later, from their mount.": "Включено по умолчанию. Выключите, чтобы отдать журнал другому payload: AnyPad нужен он, чтобы отличать свой виртуальный геймпад, а читать журнал может только один payload. Тогда запущенные игры замечаются на несколько секунд позже, по их монтированию.",
    "Also use pkgs in the console's /data/PS4Mount": "Также использовать pkg из /data/PS4Mount во внутренней памяти консоли",
    "Pkgs sent to the console's storage are added from there, with no install to wait for. They still take internal space.": "Pkg, отправленные во внутреннюю память консоли, добавляются оттуда, без ожидания установки. Они занимают внутреннюю память.",
    "Add the games found by a scan by themselves": "Добавлять найденные при поиске игры автоматически",
    "Off: a scan only lists the games, and the ones you press Add to library on are added. Games already in the library are kept up to date either way.": "Выключено: поиск только показывает игры, а добавляются те, у которых вы нажали «Добавить в библиотеку». Игры, уже находящиеся в библиотеке, обновляются в любом случае.",
    "Also search /data/pkg and all its subfolders": "Также искать в /data/pkg и во всех его подпапках",
    "Needs the switch above on. The pkgs stay where they are, even with \"Organize pkgs\" on. Games the console already installed are skipped. Restart the console once after the first games are added.": "Нужен включённый переключатель выше. Pkg остаются там, где лежат, даже при включённом «Раскладывать pkg». Игры, уже установленные консолью, пропускаются. После добавления первых игр один раз перезагрузите консоль.",
    "NAS (NFS or SMB)": "NAS (NFS или SMB)",
    "Not available on this firmware: there is no FUSE patch for it.": "Недоступно на этой прошивке: для неё нет патча FUSE.",
    "Experimental on this firmware: its FUSE patch is itemzflow's and was not tried with PS4Mount (it was on 13.52 and 6.72). If the console freezes when the share is mounted, restart it and turn the NAS off.": "Экспериментально на этой прошивке: её патч FUSE взят у itemzflow и не проверялся с PS4Mount (проверялся на 13.52 и 6.72). Если консоль зависает при подключении ресурса, перезагрузите её и выключите NAS.",
    "Use a network share (read only)": "Использовать сетевой ресурс (только чтение)",
    "Firmware 5.05 to 13.52, and only with pkgs used where they are: the share is never renamed or moved. It needs a wired console or a good Wi-Fi: games read at the speed of the network.": "Прошивка 5.05–13.52, и только с pkg, используемыми на месте: ресурс никогда не переименовывается и не переносится. Нужна консоль по кабелю или хороший Wi-Fi: игры читаются со скоростью сети.",
    "Protocol": "Протокол",
    "Server": "Сервер",
    "Export (NFS) or share (SMB)": "Экспорт (NFS) или ресурс (SMB)",
    "Folder inside it": "Папка внутри",
    "Port": "Порт",
    "User (SMB)": "Пользователь (SMB)",
    "Password (SMB)": "Пароль (SMB)",
    "Remove several": "Убрать несколько",
    "Console storage: turn on \"Also use pkgs in the console's /data/PS4Mount\" in Settings": "Память консоли: включите «Также использовать pkg из /data/PS4Mount во внутренней памяти консоли» в настройках",
    "Remove games from the library": "Убрать игры из библиотеки",
    "The chosen games leave the console's home screen. Their pkgs stay where they are: nothing is deleted, and Add to library brings each one back.": "Выбранные игры пропадут с главного экрана консоли. Их pkg остаются на месте: ничего не удаляется, а «Добавить в библиотеку» вернёт каждую.",
    "Remove the chosen ones": "Убрать выбранные",
    "No games to remove (an open game is closed first)": "Нет игр для удаления (запущенная игра сначала закрывается)",
    "Remove {0} game(s) from the library? Their pkgs stay where they are.": "Убрать {0} игр из библиотеки? Их pkg остаются на месте.",
    "{0} removed; not removed: {1}": "Убрано: {0}; не убрано: {1}",
    "{0} game(s) removed from the library": "Игр убрано из библиотеки: {0}",
    "Removing {0} of {1}…": "Убираю {0} из {1}…",
    "First start: check the settings (which folders, games per group, add-ons) and press Save in Settings. While this page is open no game is added; closed for 2 minutes without saving, the default settings are used.": "Первый запуск: проверьте настройки (какие папки, игр в группе, DLC) и нажмите «Сохранить» в настройках. Пока эта страница открыта, игры не добавляются; если закрыть её на 2 минуты без сохранения, будут использованы настройки по умолчанию.",
    "Look for new games on it": "Искать на нём новые игры",
    "Every minute": "Каждую минуту",
    "Every 10 minutes": "Каждые 10 минут",
    "Every hour": "Каждый час",
    "Only with Scan for games": "Только по кнопке «Искать игры»",
    "saved": "сохранено",
    "Find servers on the network": "Найти серверы в сети",
    "List the server's shares": "Показать ресурсы сервера",
    "How to share a folder from a computer or a NAS": "Как открыть общий доступ к папке на компьютере или NAS",
    "Windows:": "Windows:",
    "right-click the folder, Properties, Sharing, Advanced Sharing, tick \"Share this folder\". Then fill in User and Password here with your Windows account. If the console does not find the PC, set its network as Private.": "щёлкните папку правой кнопкой, «Свойства», «Доступ», «Расширенная настройка», отметьте «Открыть общий доступ к этой папке». Затем введите здесь Пользователя и Пароль вашей учётной записи Windows. Если консоль не находит компьютер, сделайте его сеть частной.",
    "macOS:": "macOS:",
    "System Settings, General, Sharing: turn on File Sharing and add the folder. In Options, turn on SMB sharing for your user, and use that user and password here.": "Системные настройки, «Основные», «Общий доступ»: включите «Общий доступ к файлам» и добавьте папку. В «Параметрах» включите доступ по SMB для своего пользователя и используйте здесь этого пользователя и пароль.",
    "Linux:": "Linux:",
    "share the folder with Samba (read only, guest allowed) or NFS (/etc/exports), and let the console's address through the firewall.": "откройте папку через Samba (только чтение, гостевой доступ разрешён) или NFS (/etc/exports) и пропустите адрес консоли через межсетевой экран.",
    "NAS box": "Устройство NAS",
    "(Synology, QNAP, a router with USB): turn on SMB file sharing in its settings and give the shared folder read access.": "(Synology, QNAP, роутер с USB): включите в настройках общий доступ по SMB и дайте общей папке право чтения.",
    "A cable is much faster than Wi-Fi. With no switch or free router port, a cable straight from the computer to the console works too: share the computer's internet connection on that cable.": "Кабель намного быстрее Wi-Fi. Если нет коммутатора или свободного порта роутера, подойдёт и кабель напрямую от компьютера к консоли: раздайте по нему интернет с компьютера.",
    "Looking for servers on the console's network...": "Ищу серверы в сети консоли...",
    "Choose a server:": "Выберите сервер:",
    "No server found. Check that the computer or NAS is on, on the same network as the console, shares a folder, and that its firewall allows file sharing.": "Сервер не найден. Проверьте, что компьютер или NAS включён, находится в одной сети с консолью, открывает папку и что его межсетевой экран разрешает общий доступ к файлам.",
    "Find a server first, or type its address in Server.": "Сначала найдите сервер или введите его адрес в поле «Сервер».",
    "Asking {0} what it shares...": "Спрашиваю {0}, что он открывает...",
    "Fill in User and Password, then press \"List the server's shares\".": "Заполните «Пользователь» и «Пароль» и нажмите «Показать ресурсы сервера».",
    "Choose the shared folder with your games:": "Выберите общую папку с вашими играми:",
    "This server shares no folders.": "Этот сервер не открывает ни одной папки.",
    "Ready: press Save to use it.": "Готово: нажмите «Сохранить», чтобы использовать.",
    "Turn on BinLoader (port 9090) in GoldHEN to use the share.": "Включите BinLoader (порт 9090) в GoldHEN, чтобы использовать ресурс.",
    "guest": "гость",
    "Language": "Язык",
    "Restore original files": "Вернуть исходные файлы",
    "Takes games off the console and puts their pkgs (game, update and add-ons) back where they were, with the names they had. Nothing is deleted. The open game is closed first.": "Убирает игры с консоли и возвращает их pkg (игру, обновление и DLC) на прежние места с прежними именами. Ничего не удаляется. Запущенная игра сначала закрывается.",
    "Takes the game off the console and puts its pkgs back where they were, with the names they had. Nothing is deleted.": "Убирает игру с консоли и возвращает её pkg на прежние места с прежними именами. Ничего не удаляется.",
    "Restore the files of all games": "Вернуть файлы всех игр",
    "Restore the files of chosen games": "Вернуть файлы выбранных игр",
    "Use restored pkgs again": "Снова использовать возвращённые pkg",
    "Each chosen game gets its pkgs back where they were, with its update and all its add-ons. The open game is closed first.": "Каждой выбранной игре возвращаются её pkg на прежние места, вместе с обновлением и всеми DLC. Запущенная игра сначала закрывается.",
    "Files": "Файлы",
    "Restore the chosen ones": "Вернуть выбранные",
    "Restore the original files of {0}?\n\nThe game leaves the console and its pkgs (game, update and add-ons) go back where they were, with the names they had. The open game is closed first. PS4Mount stops using these pkgs. Nothing is deleted.": "Вернуть исходные файлы игры {0}?\n\nИгра уйдёт с консоли, а её pkg (игра, обновление и DLC) вернутся на прежние места с прежними именами. Запущенная игра сначала закрывается. PS4Mount перестаёт использовать эти pkg. Ничего не удаляется.",
    "WARNING: this restores the original files of ALL {0} games: their pkgs (game, update and add-ons) go back where they were, with the names they had.\n\nThe open game is closed now, without saving. All PS4Mount games leave the console, {1} at a time, and PS4Mount stops using these pkgs. Nothing is deleted.\n\nContinue?": "ВНИМАНИЕ: это вернёт исходные файлы ВСЕХ игр ({0}): их pkg (игра, обновление и DLC) вернутся на прежние места с прежними именами.\n\nЗапущенная игра закроется сейчас, без сохранения. Все игры PS4Mount уйдут с консоли по {1} за раз, и PS4Mount перестанет использовать эти pkg. Ничего не удаляется.\n\nПродолжить?",
    "Restore the original files of {0} game(s), each with its update and all its add-ons?\n\nThe open game is closed now, without saving. The games leave the console{1}. Nothing is deleted.": "Вернуть исходные файлы игр ({0}), каждой вместе с обновлением и всеми DLC?\n\nЗапущенная игра закроется сейчас, без сохранения. Игры уйдут с консоли{1}. Ничего не удаляется.",
    "Use the restored pkgs again? They are moved into the ps4 folder and added on the next scan.": "Снова использовать возвращённые pkg? Они будут перенесены в папку ps4 и добавлены при следующем поиске.",
    "The console's": "Как у консоли",
    "Games removed from the library per group (1 to": "Игр убирается из библиотеки за раз (от 1 до",
    "Select all": "Выбрать все",
    "Game": "Игра",
    "Pick the pkgs on this computer. Each one is checked first (it takes a second): only pkgs this console can use are sent, so no transfer ends in a game that does not start. They are added to the library when they arrive.": "Выберите pkg на этом компьютере. Каждый сначала проверяется (это занимает секунду): отправляются только pkg, которые эта консоль может использовать, поэтому отправка не закончится игрой, которая не запускается. По прибытии они добавляются в библиотеку.",
    "Drop .pkg files here, or click to pick them": "Перетащите сюда .pkg или нажмите, чтобы выбрать",
    "Send to": "Отправить на",
    "Cancel transfer": "Отменить отправку",
    "Send": "Отправить",
    "uploading to Drive ({0}%)": "загрузка на Drive ({0} %)",
    "downloading from Drive ({0}%)": "скачивание с Drive ({0} %)",
    "waiting to go to Drive": "в очереди на загрузку на Drive",
    "waiting to come from Drive": "в очереди на скачивание с Drive",
    "reading again what already arrived…": "перечитываю то, что уже пришло…",
    "reading again what Drive already has…": "перечитываю то, что уже есть на Drive…",
    "Google Drive asks to connect again: open {0} and type {1}": "Google Drive просит подключиться заново: откройте {0} и введите {1}",
    "The transfer goes on once you do": "Передача продолжится, как только вы это сделаете",
    "{0} of {1}": "{0} из {1}",
    "connection lost, trying again in {0} s": "соединение потеряно, повтор через {0} с",
    "checking the file…": "проверяю файл…",
    "{0} left": "осталось {0}",
    "measuring the speed…": "измеряю скорость…",
    "running for {0}": "идёт {0}",
    "less than a minute": "меньше минуты",
    "First, your own Google client (once). PS4Mount comes with none: yours stays on this console only.": "Сначала ваш собственный клиент Google (один раз). В PS4Mount его нет: ваш остаётся только на этой консоли.",
    "Open": "Откройте",
    ", create a project and enable the Google Drive API.": ", создайте проект и включите Google Drive API.",
    "In Google Auth Platform (OAuth consent screen): audience External, and add your Google email in Audience → Test users (the app stays in Testing).": "В Google Auth Platform (экран согласия OAuth): аудитория «Внешняя», и добавьте свой адрес Google в «Аудитория → Тестовые пользователи» (приложение остаётся в режиме тестирования).",
    "In Clients (Credentials), create an OAuth client of type TVs and Limited Input devices, and copy its client ID and secret here.": "В «Клиентах» («Учётные данные») создайте клиент OAuth типа «Телевизоры и устройства с ограниченным вводом» и скопируйте сюда его ID и секрет.",
    "Client ID": "ID клиента",
    "Client secret": "Секрет клиента",
    "Change": "Изменить",
    "Your Google client: {0}": "Ваш клиент Google: {0}",
    "Google Drive": "Google Drive",
    "console.cloud.google.com": "console.cloud.google.com",
    "Back up to Drive": "Копия на Drive",
    "Connect Google Drive": "Подключить Google Drive",
    "Copies of your games in your own Google Drive: back up the library, send a game, and download it back to any drive of the console. PS4Mount can only see the files it puts in Drive (folder PS4Mount), nothing else of your Drive.": "Копии ваших игр на вашем Google Drive: сделайте копию библиотеки, отправьте игру и скачайте её потом на любой накопитель консоли. PS4Mount видит только файлы, которые сам кладёт на Drive (папка PS4Mount), и больше ничего.",
    "On your phone or computer, open": "На телефоне или компьютере откройте",
    "and type this code:": "и введите этот код:",
    "Waiting for you to allow it in your Google account…": "Жду, пока вы разрешите доступ в аккаунте Google…",
    "Connect": "Подключить",
    "Back up the library": "Копировать библиотеку",
    "Refresh": "Обновить",
    "Disconnect": "Отключить",
    "Download to": "Скачать на",
    "In Drive": "На Drive",
    "Send to Drive": "Отправить на Drive",
    "Send to Drive again": "Отправить на Drive снова",
    "In Google Drive": "В Google Drive",
    "in Drive ({0})": "на Drive ({0})",
    "not in Drive": "нет на Drive",
    "Uploading {0} to Drive": "Загружаю {0} на Drive",
    "Downloading {0} from Drive": "Скачиваю {0} с Drive",
    "Moving {0} to the Drive trash": "Перемещаю {0} в корзину Drive",
    "Reading Google Drive": "Читаю Google Drive",
    "Asking Google for a code": "Запрашиваю код у Google",
    "{0} more waiting": "ещё в очереди: {0}",
    "{0} of {1} used": "занято {0} из {1}",
    "{0} used": "занято {0}",
    "on the console": "на консоли",
    "Download": "Скачать",
    "Delete from Drive": "Удалить с Drive",
    "Nothing in Google Drive yet: use Back up the library, or Send to Drive on a game's page.": "В Google Drive пока ничего нет: используйте «Копировать библиотеку» или «Отправить на Drive» на странице игры.",
    "Disconnect Google Drive? The copies stay in your Drive; PS4Mount forgets the account.": "Отключить Google Drive? Копии останутся на вашем Drive; PS4Mount забудет аккаунт.",
    "Back up the whole library to Google Drive? Games already there are skipped. The console must stay on (not in rest mode) until it ends.": "Скопировать всю библиотеку на Google Drive? Игры, которые там уже есть, пропускаются. Консоль должна оставаться включённой (не в режиме покоя) до конца.",
    "Stop the Drive transfer? An upload goes on from where it was the next time.": "Остановить передачу Drive? Загрузка в следующий раз продолжится с того места, где остановилась.",
    "Move {0} to the Drive trash? The pkgs on the console stay.": "Переместить {0} в корзину Drive? Pkg на консоли остаются.",
    "Ready": "Готово",
    "Restart to play": "Перезагрузите, чтобы играть",
    "Running": "Запущена",
    "Not in library": "Не в библиотеке",
    "Installed on console": "Установлена на консоли",
    "Adding": "Добавляется",
    "On another drive": "На другом накопителе",
    "Drive not connected": "Накопитель не подключён",
    "Add to library": "Добавить в библиотеку",
    "Remove from library": "Убрать из библиотеки",
    "Close the game to remove it": "Закройте игру, чтобы убрать её",
    "Please wait…": "Подождите…",
    "Please wait...": "Подождите...",
    " (with update)": " (с обновлением)",
    "mounted {0}": "смонтировано {0}",
    "1 add-on": "1 DLC",
    "{0} add-ons": "DLC: {0}",
    "no add-ons": "без DLC",
    "Game{0}{1}": "Игра{0}{1}",
    ", update": ", обновление",
    " and {0}": " и {0}",
    "Added. Restart the console once to play it.": "Добавлено. Один раз перезагрузите консоль, чтобы играть.",
    "On {0}, which is not connected. Connect it to play.": "На {0}, он не подключён. Подключите его, чтобы играть.",
    "{0} game(s)": "Игр: {0}",
    "State": "Состояние",
    "Version": "Версия",
    "v{0} (game v{1} with its update)": "v{0} (игра v{1} с обновлением)",
    "Add-ons": "DLC",
    "none": "нет",
    "Needs firmware": "Нужна прошивка",
    "unknown": "неизвестно",
    "Size": "Размер",
    "On": "На",
    "game": "игра",
    "update": "обновление",
    "add-on": "DLC",
    "other": "другое",
    "Error: {0}": "Ошибка: {0}",
    "Also install big add-ons (over 256 MB)": "Устанавливать и большие DLC (больше 256 МБ)",
    "A game only sees an add-on the system has installed: big ones are copied to the console's storage, in the background (a few minutes). Off, they are not used.": "Игра видит только то DLC, которое установила система: большие копируются в память консоли в фоне (несколько минут). Если выключено, они не используются.",
    "Ready to install": "Готово к установке",
    "A homebrew app: it is sent to the console and installed with the system's installer, as by hand. The copy is deleted once it is installed.": "Homebrew-приложение: оно отправляется на консоль и устанавливается установщиком системы, как вручную. После установки копия удаляется.",
    "Could not read the list: {0}": "Не удалось прочитать список: {0}",
    "Could not read the settings: {0}": "Не удалось прочитать настройки: {0}",
    "Could not read the log: {0}": "Не удалось прочитать журнал: {0}",
    "Games per group must be a number from 1 to {0}": "Игр в группе должно быть числом от 1 до {0}",
    "Remove {0} from the library? Its pkgs stay where they are (deleting it on the console deletes them).": "Убрать {0} из библиотеки? Её pkg остаются на месте (удаление игры на консоли удаляет и их).",
    "{0} game(s) selected": "Выбрано игр: {0}",
    ", removed from the library {0} at a time": ", убираются из библиотеки по {0} за раз",
    "No games selected": "Игры не выбраны",
    "No PS4Mount games on the connected drives": "На подключённых накопителях нет игр PS4Mount",
    ", {0} at a time": ", по {0} за раз",
    "{0} free": "свободно {0}",
    "No drive connected": "Нет подключённых накопителей",
    "no place to send it to": "некуда отправлять",
    "not enough space in {0}: {1} free, {2} needed": "в {0} недостаточно места: свободно {1}, нужно {2}",
    "Checking…": "Проверка…",
    "Sending {0}%": "Отправка {0}%",
    "Sent": "Отправлено",
    "Failed": "Ошибка",
    "Cannot be used": "Использовать нельзя",
    "Ready to send": "Готово к отправке",
    "needs firmware {0}": "нужна прошивка {0}",
    "Send again": "Отправить снова",
    "Remove": "Убрать",
    "could not be checked: {0}": "не удалось проверить: {0}",
    "the connection to the console was lost": "соединение с консолью потеряно",
    "cancelled": "отменено",
    "Cancel the transfer in progress?": "Отменить текущую отправку?",
    "Stop PS4Mount? The games stay unavailable until it is loaded again.": "Остановить PS4Mount? Игры будут недоступны, пока его не загрузят снова.",
    "Download links": "Скачать по ссылкам",
    "The console downloads them itself (you can close this page): a pkg, a ZIP or a RAR, also in parts. Paste the direct links, the ones that start the download, one per line; all the parts of a RAR (name.part1.rar, name.part2.rar...) become one download. Its pkgs are added to the library when they arrive.": "Консоль скачивает сама (страницу можно закрыть): pkg, ZIP или RAR, в том числе по частям. Вставьте прямые ссылки, те, что начинают загрузку, по одной в строке; все части RAR (имя.part1.rar, имя.part2.rar...) станут одной загрузкой. Их pkg добавляются в библиотеку по прибытии.",
    "A link with no file name in it: add | and its name.": "Ссылка без имени файла: добавьте | и имя.",
    "Password (if the archive has one)": "Пароль (если у архива он есть)",
    "Not needed for one that opened another download, nor for the site in brackets at the start of the name ([SITE]-game): those are tried by themselves.": "Не нужен для архива, который уже открывал другую загрузку, и для сайта в скобках в начале имени ([САЙТ]-игра): их пробуют сами.",
    "The password of the archive:": "Пароль архива:",
    "Save to": "Сохранить в",
    "Checking the links of {0}…": "Проверяю ссылки {0}…",
    "through the browser": "через браузер",
    "Downloading {0}": "Скачиваю {0}",
    "Extracting {0}": "Распаковываю {0}",
    "extracting {0}": "распаковка {0}",
    "downloading": "скачивание",
    "waiting": "ожидание",
    "{0} parts": "частей: {0}",
    "Try again": "Повторить",
    "paste at least one link": "вставьте хотя бы одну ссылку",
    "Remove this download? What it downloaded so far is deleted.": "Убрать эту загрузку? То, что уже скачано, удаляется.",
    "Cancel the download of {0}? What it downloaded so far is deleted.": "Отменить загрузку {0}? То, что уже скачано, удаляется."
  }
};
var LANG = 'en';

/* The text in the panel's language; {0}, {1}... are replaced by the other arguments. */
function t(s) {
  var tab = LANGS[LANG], r = (tab && tab[s]) || s;
  for (var i = 1; i < arguments.length; i++) r = r.split('{' + (i - 1) + '}').join(arguments[i]);
  return r;
}

function known(k) {
  for (var l in LANGS) if (LANGS[l][k]) return true;
  return false;
}

/* The fixed texts of the page (text nodes and placeholder/title), by their English text,
 * kept on each node so the page can switch back. Generated parts use t() themselves. */
function translatePage() {
  var walker = document.createTreeWalker(document.body, 4, null, false), n, k, attrs, i, j, el, a;
  while ((n = walker.nextNode())) {
    if (/^(SCRIPT|STYLE|PRE|TEXTAREA)$/.test(n.parentNode.nodeName)) continue;
    if (n.psmEn === undefined) {
      k = n.nodeValue.replace(/\s+/g, ' ').replace(/^ | $/g, '');
      if (!k || !known(k)) continue; /* only texts some table knows */
      n.psmEn = k;
      n.psmLead = /^\s/.test(n.nodeValue) ? ' ' : '';
      n.psmTrail = /\s$/.test(n.nodeValue) ? ' ' : '';
    }
    n.nodeValue = n.psmLead + t(n.psmEn) + n.psmTrail;
  }
  attrs = ['placeholder', 'title'];
  for (i = 0; i < attrs.length; i++) {
    a = attrs[i];
    el = document.querySelectorAll('[' + a + ']');
    for (j = 0; j < el.length; j++) {
      if (!el[j].getAttribute('data-en-' + a)) el[j].setAttribute('data-en-' + a, el[j].getAttribute(a));
      el[j].setAttribute(a, t(el[j].getAttribute('data-en-' + a)));
    }
  }
}

/* Switches the page to tag ("es", "en"); English for a language with no table. */
function setLang(tag) {
  var code = LANGS[tag] ? tag : 'en';
  if (code === LANG) return false;
  LANG = code;
  document.documentElement.lang = code;
  translatePage();
  return true;
}
