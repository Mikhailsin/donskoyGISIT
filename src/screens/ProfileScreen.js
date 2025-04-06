import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ProfileScreen = () => {
    // Опционально: состояние для отслеживания выбранной даты
    const [selectedDate, setSelectedDate] = React.useState('');

    // Опционально: обработчик выбора даты
    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Календарь</Text>
            <Calendar
                // Настройка внешнего вида
                style={styles.calendar}
                // Установка начальной даты (сегодняшняя дата)
                current={new Date().toISOString().split('T')[0]}
                // Обработчик выбора даты
                onDayPress={onDayPress}
                // Отметка выбранной даты
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        selectedColor: '#007AFF',
                    },
                }}
                // Опционально: настройка темы
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ECE2CC',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#827456',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    monthTextColor: '#827456',
                    arrowColor: '#827456',
                }}
            />
            {/* Опционально: отображение выбранной даты */}
            {selectedDate ? (
                <Text style={styles.selectedDate}>
                    Выбрано: {selectedDate}
                </Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    calendar: {
        borderRadius: 10,
        elevation: 4,
        marginBottom: 20,
    },
    selectedDate: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
});

export default ProfileScreen;