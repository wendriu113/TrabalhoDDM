import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Container padrão (Light)
    container:{
        flex: 1,
        backgroundColor: '#FFF0F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    // Container padrão (Dark)
    containerDark:{
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    // Containers específicos (Light)
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    containerExplorar: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },

    containerFavoritos: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },

    containerExplorarDark: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingTop: 10,
    },

    containerFavoritosDark: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingTop: 20,
    },

    containerDetalhes: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },

    containerDrawer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    // Containers específicos (Dark)
    containerHomeDark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        padding: 20,
    },

    containerDetalhesDark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
    },

    containerDrawerDark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
    },

    // Textos (Light)
    textoTitulo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#8A2BE2',
        marginBottom: 10,
    },

    textoSubtitulo:{
        fontSize: 16,
        color: '#555'
    },

    // Textos (Dark)
    textoTituloDark:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 10,
    },

    textoSubtituloDark:{
        fontSize: 16,
        color: '#BDBDBD'
    },

    // Home styles (Light)
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },

    // Home styles (Dark)
    tituloDark: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },

    // Drawer title (Light/Dark)
    tituloDrawer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },

    tituloDrawerDark: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    imagem: {
        width: 250,
        height: 250,
        borderRadius: 15,
        marginBottom: 30,
    },

    // Detalhes styles (Light)
    texto: {
        fontSize: 18,
        marginBottom: 20,
        color: '#333',
    },

    // Detalhes styles (Dark)
    textoDark: {
        fontSize: 18,
        marginBottom: 20,
        color: '#FFFFFF',
    },

    // Explorar styles (Light)
    tituloExplorar: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 0,
        marginBottom: 6,
        color: '#8A2BE2',
    },

    // Explorar styles (Dark)
    tituloExplorarDark: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 0,
        marginBottom: 6,
        color: '#BB86FC',
    },

    exploreHero: {
        marginHorizontal: 12,
        marginTop: 8,
        marginBottom: 10,
        padding: 14,
        borderRadius: 16,
        backgroundColor: '#F6D1E4',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },

    exploreHeroDark: {
        marginHorizontal: 12,
        marginTop: 8,
        marginBottom: 10,
        padding: 14,
        borderRadius: 16,
        backgroundColor: '#232323',
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.22,
        shadowRadius: 8,
        elevation: 3,
    },

    exploreEyebrow: {
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#8A2BE2',
        marginBottom: 4,
    },

    exploreEyebrowDark: {
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#BB86FC',
        marginBottom: 4,
    },

    exploreSubtitle: {
        fontSize: 13,
        color: '#555',
        marginBottom: 10,
        lineHeight: 18,
    },

    exploreSubtitleDark: {
        fontSize: 13,
        color: '#D0C8E8',
        marginBottom: 10,
        lineHeight: 18,
    },

    exploreStats: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    },

    exploreStatsDark: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    },

    statChip: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#f0d3df',
    },

    statChipDark: {
        flex: 1,
        backgroundColor: '#2f2f2f',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#4a3e63',
    },

    statChipLabel: {
        fontSize: 12,
        color: '#7a3db8',
        fontWeight: '700',
        marginBottom: 2,
    },

    statChipLabelDark: {
        fontSize: 12,
        color: '#D0C8E8',
        fontWeight: '700',
        marginBottom: 2,
    },

    statChipValue: {
        fontSize: 18,
        color: '#333',
        fontWeight: '900',
    },

    statChipValueDark: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '900',
    },

    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#e7bfd0',
        fontSize: 14,
        color: '#333',
    },

    searchInputDark: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#4a3e63',
        fontSize: 14,
        color: '#fff',
    },

    listContent: {
        paddingBottom: 18,
        paddingTop: 2,
    },

    emptyListContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 18,
    },

    emptyState: {
        marginHorizontal: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 14,
        padding: 18,
        alignItems: 'center',
    },

    emptyStateDark: {
        marginHorizontal: 12,
        backgroundColor: '#2a2a2a',
        borderRadius: 14,
        padding: 18,
        alignItems: 'center',
        borderColor: '#BB86FC',
        borderWidth: 1,
    },

    emptyStateTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#333',
        marginBottom: 6,
    },

    emptyStateTitleDark: {
        fontSize: 17,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 6,
    },

    emptyStateText: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
    },

    emptyStateTextDark: {
        fontSize: 13,
        color: '#BDBDBD',
        textAlign: 'center',
    },

    item: {
        backgroundColor: '#F8C8DC',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    itemDark: {
        backgroundColor: '#2a2a2a',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
        borderColor: '#BB86FC',
        borderWidth: 1,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    nomeDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    raca: {
        fontSize: 14,
        color: '#555',
    },

    racaDark: {
        fontSize: 14,
        color: '#BDBDBD',
    },

    // Settings / Configurações styles
    settingsContainer: {
        flex: 1,
        backgroundColor: '#FFF0F5',
        padding: 20,
        justifyContent: 'flex-start',
    },

    settingsContainerDark: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        padding: 20,
        justifyContent: 'flex-start',
    },

    themeSwitchContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    themeSwitchContainerDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },

    themeSwitchText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },

    themeSwitchTextDark: {
        fontSize: 16,
        fontWeight: '600',
        color: '#BDBDBD',
        marginBottom: 10,
    },

    // Home Inicial (Landing Page)
    homeInitialContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 50,
    },

    homeInitialContainerDark: {
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 50,
    },

    logoContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },

    logoImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },

    welcomeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#8A2BE2',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

    welcomeTitleDark: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#BB86FC',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

    welcomeSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },

    welcomeSubtitleDark: {
        fontSize: 16,
        color: '#BDBDBD',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 24,
    },

    descriptionBox: {
        backgroundColor: '#F8C8DC',
        borderRadius: 12,
        padding: 15,
        marginBottom: 30,
    },

    descriptionBoxDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 12,
        padding: 15,
        marginBottom: 30,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 4,
    },

    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8A2BE2',
        marginBottom: 8,
    },

    descriptionTitleDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 8,
    },

    descriptionText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

    descriptionTextDark: {
        fontSize: 14,
        color: '#BDBDBD',
        lineHeight: 20,
    },

    featuresList: {
        marginBottom: 30,
        paddingBottom: 20,
    },

    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    featureItemDark: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        flexWrap: 'wrap',
    },

    featureIcon: {
        fontSize: 24,
        marginRight: 12,
        color: '#8A2BE2',
        fontWeight: 'bold',
    },

    featureIconDark: {
        fontSize: 24,
        marginRight: 12,
        color: '#BB86FC',
        fontWeight: 'bold',
    },

    featureText: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },

    featureTextDark: {
        fontSize: 14,
        color: '#BDBDBD',
        flex: 1,
    },

    // Pokémon Item Styles
    pokemonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8C8DC',
        padding: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonCardDark: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2a2a2a',
        padding: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 14,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8C8DC',
        padding: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonItemDark: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2a2a2a',
        padding: 14,
        marginVertical: 6,
        marginHorizontal: 12,
        borderRadius: 14,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonInfo: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },

    pokemonImagem: {
        width: 64,
        height: 64,
        borderRadius: 12,
    },

    pokemonNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
    },

    pokemonNomeDark: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 3,
    },

    pokemonTipo: {
        fontSize: 12,
        color: '#666',
    },

    pokemonTipoDark: {
        fontSize: 12,
        color: '#BDBDBD',
    },

    botaoFavoritar: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconeFavoritado: {
        fontSize: 22,
    },

    iconeFavoritadoAtivo: {
        fontSize: 22,
    },

    // Time Screen Styles
    timeScreen: {
        backgroundColor: '#fff',
        flex: 1,
    },

    timeScreenDark: {
        backgroundColor: '#1a1a1a',
        flex: 1,
    },

    timeContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },

    timeContainerDark: {
        padding: 20,
        backgroundColor: '#1a1a1a',
    },

    timeTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#8A2BE2',
        marginBottom: 15,
        textAlign: 'center',
    },

    timeTitleDark: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 15,
        textAlign: 'center',
    },

    timeCounter: {
        backgroundColor: '#F8C8DC',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        alignItems: 'center',
    },

    timeCounterDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        alignItems: 'center',
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 3,
    },

    timeCounterText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },

    timeCounterTextDark: {
        fontSize: 16,
        fontWeight: '600',
        color: '#BDBDBD',
    },

    timeEmpty: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
        marginBottom: 20,
    },

    timeEmptyDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#BB86FC',
        borderWidth: 2,
        borderStyle: 'dashed',
    },

    timeEmptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },

    timeEmptyTextDark: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },

    timeEmptySubtext: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },

    timeEmptySubtextDark: {
        fontSize: 14,
        color: '#BDBDBD',
        textAlign: 'center',
    },

    timeSectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8A2BE2',
        marginBottom: 12,
        marginTop: 10,
    },

    timeSectionTitleDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 12,
        marginTop: 10,
    },

    timePokemonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8C8DC',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 0,
        borderRadius: 10,
        marginBottom: 10,
    },

    timePokemonItemDark: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 0,
        borderRadius: 10,
        marginBottom: 10,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 3,
    },

    timePokemonImagem: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },

    timePokemonInfo: {
        flex: 1,
        marginLeft: 10,
    },

    timePokemonNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    timePokemonNomeDark: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    timePokemonTipo: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },

    timePokemonTipoDark: {
        fontSize: 12,
        color: '#BDBDBD',
        marginTop: 2,
    },

    botaoRemover: {
        padding: 8,
        marginLeft: 10,
    },

    iconeRemover: {
        fontSize: 20,
        color: '#FF6B6B',
        fontWeight: 'bold',
    },

    botaoAdicionarPokemon: {
        backgroundColor: '#8A2BE2',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    botaoAdicionarPokemonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    botaoDesabilitado: {
        backgroundColor: '#ccc',
        opacity: 0.6,
    },

    botaoLimparTime: {
        backgroundColor: '#FF6B6B',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginVertical: 10,
    },

    botaoLimparTimeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },

    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 15,
        maxHeight: '90%',
    },

    modalContentDark: {
        backgroundColor: '#1a1a1a',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 15,
        maxHeight: '90%',
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },

    modalTitleDark: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
    },

    modalCloseButton: {
        fontSize: 24,
        color: '#FF6B6B',
        fontWeight: 'bold',
    },

    pokemonSelectItem: {
        backgroundColor: '#F8C8DC',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        flex: 1,
        margin: 6,
    },

    pokemonSelectItemDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        flex: 1,
        margin: 6,
        borderColor: '#BB86FC',
        borderWidth: 2,
    },

    pokemonSelectItemDesabilitado: {
        opacity: 0.5,
    },

    pokemonSelectImagem: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginBottom: 8,
    },

    pokemonSelectNome: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },

    pokemonSelectNomeDark: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },

    gridWrapper: {
        justifyContent: 'space-between',
    },

    // Audio Pokémon Styles (TelaDrawer2)
    containerAudio: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },

    containerAudioDark: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingTop: 20,
    },

    tituloAudio: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 8,
        color: '#8A2BE2',
    },

    tituloAudioDark: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 8,
        color: '#BB86FC',
    },

    subtituloAudio: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 15,
        color: '#666',
    },

    subtituloAudioDark: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 15,
        color: '#BDBDBD',
    },

    pokemonAudioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8C8DC',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonAudioItemDark: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2a2a2a',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2,
    },

    pokemonAudioInfo: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 12,
    },

    pokemonAudioImagem: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    pokemonAudioNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },

    pokemonAudioNomeDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },

    pokemonAudioTipo: {
        fontSize: 14,
        color: '#666',
    },

    pokemonAudioTipoDark: {
        fontSize: 14,
        color: '#BDBDBD',
    },

    botaoAudio: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconeAudio: {
        fontSize: 28,
    },

    // Cadastro Pokémon Styles (TelaDrawer3)
    cadastroPokemonContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 50,
    },

    cadastroPokemonContainerDark: {
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 50,
    },

    previewImageContainer: {
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },

    previewImageContainerDark: {
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 12,
        backgroundColor: '#2a2a2a',
        padding: 15,
    },

    previewImage: {
        width: 150,
        height: 150,
        borderRadius: 12,
    },

    inputContainer: {
        marginBottom: 20,
    },

    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },

    inputLabelDark: {
        fontSize: 14,
        fontWeight: '600',
        color: '#BDBDBD',
        marginBottom: 8,
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#f9f9f9',
    },

    textInputDark: {
        borderWidth: 1,
        borderColor: '#BB86FC',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        color: '#FFFFFF',
        backgroundColor: '#2a2a2a',
    },

    botoesContainer: {
        flexDirection: 'column',
        gap: 12,
        marginTop: 30,
        marginBottom: 20,
    },

    botaoPrimario: {
        backgroundColor: '#8A2BE2',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#8A2BE2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },

    botaoPrimarioDark: {
        backgroundColor: '#BB86FC',
    },

    botaoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    botaoSecundario: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FF6B6B',
    },

    botaoSecundarioDark: {
        backgroundColor: '#2a2a2a',
        borderColor: '#FF6B6B',
    },

    botaoTextoSecundario: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6B6B',
    },

    dicaContainer: {
        backgroundColor: '#FFF0F5',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
        borderLeftColor: '#8A2BE2',
        borderLeftWidth: 4,
    },

    dicaContainerDark: {
        backgroundColor: '#2a2a2a',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
        borderLeftColor: '#BB86FC',
        borderLeftWidth: 4,
    },

    dicaTexto: {
        fontSize: 13,
        color: '#333',
        lineHeight: 18,
    },

    dicaTextoDark: {
        fontSize: 13,
        color: '#BDBDBD',
        lineHeight: 18,
    },
})