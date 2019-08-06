import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground, 

} from 'react-native';

import FlipCard from 'react-native-flip-card'


export default class detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    GetItem(names) {

        alert(names);

    }

    static navigationOptions = { 
        title: 'Curiosidades de Los Insectos',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'black',
        },
    }


    renderItem = ({ item }) => {
        return (
            <FlipCard
                style={styles.container}
                friction={2}
                perspective={1000}
                flipHorizontal={false}
                flipVertical={true}
                flip={false}
                clickable={true}
                onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
            >
                {/* Face Side */}
                <View style={styles.cardprincipal}>
                    <ImageBackground style={{minHeight: 200}} source={item.imagen} >
                        <Text style={{ color: '#fff', fontSize:22, backgroundColor:'#0007', justifyContent:'center', alignItems:'center', textAlign:'center', fontWeight:"bold"}}>{item.nombre}</Text>
                    </ImageBackground>
                </View>


                {/* Back Side */}
                <View style={styles.cardprincipal2}>
                    <Text style={{ color: '#e7ff87',textAlign:'center', fontSize:16, fontWeight:"bold"}}>¿Sabías qué?</Text>
                    <Text style={{ color: '#fff',textAlign:'center', fontSize:16}}>{item.texto}</Text>
                </View>
                
            </FlipCard>

        )
    }

    render() {
        var tarjetas = [
            {texto: "Hay miles de especies de abejas, unas viven solas, otras en agujeros en el suelo, algunas no tienen aguijón. La Apis Mellifera (o abeja doméstica) forma colonias de entre 15.000 y 80.000 abejas, dependiendo de su fortaleza, climatología y hábitat.", nombre: "Abeja", imagen:require("./images/Abeja.jpg")},
            {texto: "Según estudios de la Universidad de Harvard, las arañas son capaces de oír muy bien en un radio de hasta tres metros. Puede no parecer mucho, pero en comparación con su tamaño la verdad es que sí lo es, ¡Menuda ventaja, nosotros no las oímos a ellas.", nombre: "Araña", imagen:require("./images/Araña.jpg")},
            {texto: "Las cucarachas no son comedores quisquillosos en absoluto, comen casi cualquier cosa, fruta, pegamento, heces, ¡lo que sea! Incluso pueden comerse a sus congéneres para saciar sus estómagos rugientes. Asqueroso, ¿No?.", nombre: "Cucaracha", imagen:require("./images/Cucarachas.jpg")},
            {texto: "En el veneno encontrado en las picaduras de las avispas se han descubierto unas sustancias llamadas feromonas. Estas feromonas hacen que otras avispas que perciban esta sustancia química se vuelvan más agresivas.", nombre: "Avispa",imagen:require("./images/Avispa.jpg")},
            {texto: "Las orugas pueden comer una cantidad enorme durante una etapa del ciclo vital que típicamente dura varias semanas. Algunos consumen 27.000 veces su peso corporal durante esta fase de la vida.", nombre: "Oruga",imagen:require("./images/Oruga.jpg")},
            {texto: "El hábitat de los escarabajos es tan diverso que podemos decir que, con excepción de las zonas árticas, viven en todos los lugares de la Tierra: desde los bosques más frondosos, pasando por los desiertos, hasta llegar a las montañas. Ah, tampoco resisten el agua salada.", nombre: "Escarabajo",imagen:require("./images/Escarabajo.jpg")},
            {texto: "Unos científicos de Australia han descubierto que estos animales usan varias técnicas para aparearse. Los más fuertes cantan y los más débiles se perfuman a fin de atraer a las hembras.", nombre: "Grillo",imagen:require("./images/Grillos.jpg")},
            {texto: "Se estima que las hormigas son capaces de levantar 50 veces su propio peso. Piensa en cuánto pesas… ¿70 kilos? Multiplícalo por 50 y medita en si podrías levantar ese peso sin ayuda alguna más que tu propio cuerpo. ¿Verdad que ahora suena más impresionante?.", nombre: "Hormiga",imagen:require("./images/Hormiga.jpg")},
            {texto: "Las libélulas no pican a los humanos y son valiosos depredadores para nosotros, ya que controlan las poblaciones de moscas y mosquitos, algunos de los cuales transmiten enfermedades como el dengue.", nombre: "Libelula",imagen:require("./images/Libelula.jpg")},
            {texto: "Estos insectos tienen un par de ojos, en algunos casos compuestos a su vez de miles de ojos en miniatura. Son los únicos insectos que tienen visión 3D, como los seres humanos.", nombre: "Mantis",imagen:require("./images/Mantis.jpg")},
            {texto: "Las mariposas son muy buenas supervivientes. Son capaces de subsistir en todo tipo de hábitats; desde los calurosos desiertos hasta las más grandes y heladas altitudes, así como en las ciudades.", nombre: "Mariposa",imagen:require("./images/Mariposa.jpg")},
            {texto: "Ellas son los únicos insectos que migran hasta 2.500 kilómetros para salir del clima frío y comenzar la hibernación. Pero no todas las mariposas monarca emigran, sólo la cuarta generación puede migrar cada año.", nombre: "Mariposa Monarca",imagen:require("./images/Mariposa Monarca.jpg")},
            {texto: "En muchos países, como Irán y Suiza, las simpáticas mariquitas son consideradas símbolos de buena suerte. Mientras vuela, una mariquita aletea 85 veces por segundo. Las mariquitas producen una sustancia que huele y que sabe horrible.", nombre: "Mariquita",imagen:require("./images/Mariquita.jpg")},
            {texto: "El milpiés es un animal omnívoro que se alimenta de material vegetal muerto y de materia en descomposición que obtiene del suelo del bosque. También se alimentan de algunas especies de plantas vivas y las especies más grandes cazan insectos. ", nombre: "Milpiés",imagen:require("./images/Milpiés.jpg")},
            {texto: "Los ojos de las moscas son de lo más curioso. Éstos están compuestos por varias células que les permiten ver en todas las direcciones en un ángulo de visión de casi 260 grados. Además de ello, en la parte superior de la cabeza tienen los llamados ocelos, es decir, dos pequeños ojos secundarios.", nombre: "Mosca",imagen:require("./images/Mosca.jpg")},
            {texto: "En algunos, no hay ningún mecanismo de alimentación. Hay adultos de algunas especies que no ingieren ningún alimento. Sus breves vidas como adultos se pasan reproduciéndose y son capaces de adquirir toda la energía necesaria para ello de la grasa almacenada en el cuerpo por la oruga.", nombre: "Polilla Búho",imagen:require("./images/Polilla Búho.jpg")},
            {texto: "Los huevos de La Polilla Luna, son adheridos en pequeños grupos a la parte inferior de las hojas, son moteados de color blanco y marrón, ligeramente ovalados y de aproximadamente 1.5 milímetros de diámetro.", nombre: "Polilla Luna",imagen:require("./images/Polilla Luna.jpg")},
            {texto: "El saltamontes llega a crecer unas 5 cm longitud, aunque las especies más grandes pueden llegar hasta los 12 cm. Las hembras son más grandes que los machos, con ovopositores cortos. El color oscila entre el verde y el verde oliva o el marrón y pueden poseer marcas amarillas o rojas.", nombre: "Saltamonte",imagen:require("./images/Saltamontes.jpg")},
            {texto: "El Insecto Zapatero es conocido por su habilidad para «caminar sobre el agua». Para lograrlo usan la tensión superficial para caminar por la superficie del agua. Detectan las vibraciones y ondulaciones del agua con los pelos sensibles que poseen en sus patas y cuerpos.", nombre: "Zapatero",imagen:require("./images/Zapatero.jpg")},
            {texto: "La vida del caracol depende de su especie. Hay especies, como los caracoles Achatinidae, que viven entre cinco y siete años. Sin embargo, los caracoles manzana acuáticos solo viven un año. A pesar de ello, hay ejemplares de han llegado a vivir 30 años.", nombre: "Caracol",imagen:require("./images/Caracol.jpg")},

        ];
        return (
            <View style={styles.contenedormain}>
                <FlatList
                    data={tarjetas}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={1}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({

    contenedormain:{
        marginTop: 0,
    },
    container: {
        marginTop: 0,

    },

    cardprincipal:{
        padding: 0,
        minHeight: 200,
    },

    cardprincipal2:{
        padding: 5,
        minHeight: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000',
        borderColor:"white",
        borderTopWidth:1,
        borderBottomWidth: 1,
    },

})