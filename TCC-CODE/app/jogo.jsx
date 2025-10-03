
// ...imports...

function Jogo() {
    // Autenticação: exibe tela de login/cadastro se não houver token
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    if (!token) {
      const Login = require('./login').default;
      return <Login onLogin={() => window.location.reload()} />;
    }

    // Músicas salvas do usuário logado
    const [userMusicas, setUserMusicas] = useState([]);
    const [userMusicasLoading, setUserMusicasLoading] = useState(false);

    // Buscar músicas do usuário logado
    const fetchUserMusicas = async () => {
      setUserMusicasLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3001/musicas', {
          headers: { 'Authorization': token }
        });
        const data = await res.json();
        setUserMusicas(data);
      } catch (e) {
        setUserMusicas([]);
      }
      setUserMusicasLoading(false);
    };

    useEffect(() => {
      fetchUserMusicas();
    }, []);

    // Salvar música local no backend
    const handleSaveLocalTrack = async (track) => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3001/musicas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({ nome: track.name, caminho: track.uri })
        });
        if (res.ok) {
          await fetchUserMusicas();
          alert('Música salva!');
        } else {
          alert('Erro ao salvar música.');
        }
      } catch (e) {
        alert('Erro ao salvar música.');
      }
    };
const styles = StyleSheet.create({
  cronometroArea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  cronometroTexto: {
    fontSize: 64,
    color: '#ffb300',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 8,
  },
  cronometroMilis: {
    fontSize: 32,
    color: '#ffb300',
    fontWeight: 'bold',
    opacity: 0.7,
    marginLeft: 4,
    position: 'relative',
    top: 8,
  },
  cronometroBtn: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  cronometroBtnTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addMusicBtnAlways: {
    backgroundColor: '#ffb300',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    alignSelf: 'center',
    width: '90%',
    elevation: 4,
  },
  addMusicBtnContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  addMusicBtn: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  addMusicBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  localMusicList: {
    marginTop: 12,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.10)',
    borderRadius: 8,
  },
  localMusicTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  localMusicItem: {
    paddingVertical: 4,
  },
  localMusicText: {
    color: '#fff',
    fontSize: 14,
  },
  musicArtist: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 2,
  },
  musicNow: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 2,
  },
  musicControlsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 16,
  },
  musicPlayerBg: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  musicImg: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  musicName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  musicControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  musicBtn: {
    marginHorizontal: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  musicBtnText: {
    fontSize: 28,
    color: '#fff',
  },
  container: { flex: 1 },
  hamburger: {
    position: 'absolute',
    top: 32,
    left: 24,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.25,
    zIndex: 10,
  },
  burgerLine: {
    width: 28,
    height: 4,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 2,
  },
  grid: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 0,
  },
  box: {
  flex: 1,
  margin: 8,
  backgroundColor: 'transparent',
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: 'transparent',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
  },
  boxText: {
    color: '#0a174e',
    fontSize: 32,
    fontWeight: 'bold',
  },
  relogioArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 64, // ainda mais alto
  },
  climaRelogioArea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  climaArea: {
    marginTop: 8,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  climaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.10)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  relogioSpacer: {
    flex: 0,
    height: '70%',
  },
  relogio: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.10)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginTop: 0,
  },
  text: { color: "#fff", fontSize: 28, fontWeight: "bold" },
});
