import { Image, StatusBar, StyleSheet, View } from 'react-native';

import IconFloat from '../components/IconFloat';
import colors from '../config/colors';

function ProductImageScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <IconFloat
                color={colors.primaryC}
                name="trash-can"
                position={{ top: 20, left: 20 }}
            />
            <IconFloat
                color={colors.light}
                name="close"
                position={{ top: 20, right: 20 }}
            />
            <Image
                resizeMode="contain"
                style={styles.productimage}
                source={require('../assets/atomichabit.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    productimage: {
        width: '100%',
        height: '100%',
    },
});

export default ProductImageScreen;
