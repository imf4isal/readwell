import { Text, TouchableHighlight } from 'react-native';

function AppButton({
    border,
    color,
    hoverColor,
    onPress,
    style,
    textColor,
    title,
}) {
    return (
        <TouchableHighlight
            onPress={onPress}
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: color,
                    borderColor: border,
                    borderRadius: 50,
                    borderWidth: border && 1,
                    justifyContent: 'center',
                    height: 55,
                    marginBottom: 20,
                    width: '100%',
                },
                style,
            ]}
            underlayColor={hoverColor}
        >
            <Text
                style={{
                    color: textColor,
                    fontSize: 20,
                    letterSpacing: 3,
                }}
            >
                {title}
            </Text>
        </TouchableHighlight>
    );
}

export default AppButton;
