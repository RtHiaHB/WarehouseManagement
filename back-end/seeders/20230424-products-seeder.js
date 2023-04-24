const { Products } = require('../models')

const productsSeeder = async () => {
    await Promise.all([
        Products.create({
            SKU: 'RES-100-1/4W',
            description: 'Resistor 1/4W - 100 Ohm',
            price: 0.19
        }),
        Products.create({
            SKU: 'RES-1K-1/4W',
            description: 'Resistor 1/4W - 1k Ohm',
            price: 0.55
        }),
        Products.create({
            SKU: 'RES-10k-1/4W',
            description: 'Resistor 1/4W - 10k Ohm',
            price: 0.69        
        }),
        Products.create({
            SKU: 'CAP-100nF',
            description: 'Capacitor 100nF',
            price: 0.22
        }),
        Products.create({
            SKU: 'CAP-1uF',
            description: 'Capacitor 1uF',
            price: 0.69
        }),
        Products.create({
            SKU: 'CAP-10uF',
            description: 'Capacitor',
            price: 1.09
        }),
        Products.create({
            SKU: 'LED-RED',
            description: 'LED - Red',
            price: 0.29
        }),
        Products.create({
            SKU: 'LED-GREEN',
            description: 'LED - Green',
            price: 0.29
        }),
        Products.create({
            SKU: 'LED-BLUE',
            description: 'LED - Blue',
            price: 0.29
        }),
        Products.create({
            SKU: 'DIODE-1N4148',
            description: 'Diode - 1N4148',
            price: 0.05
        }),
        Products.create({
            SKU: 'DIODE-1N4001',
            description: 'Diode - 1N4001',
            price: 0.05
        }),
        Products.create({
            SKU: 'TRANS-2N3904',
            description: 'Transistor - 2N3904',
            price: 0.04
        }),
        Products.create({
            SKU: 'TRANS-2N3906',
            description: 'Transistor - 2N3906',
            price: 0.04
        }),
        Products.create({
            SKU: 'OPAMP-LM741',
            description: 'Op-Amp - LM741',
            price: 0.09
        }),
        Products.create({
            SKU: 'OPAMP-LM358',
            description: 'Op-Amp - LM358',
            price: 0.09
        }),
        Products.create({
            SKU: 'VR-LM7805',
            description: 'Voltage Regulator - LM7805',
            price: 0.15
        }),
        Products.create({
            SKU: 'VR-LM7812',
            description: 'Voltage Regulator - LM7812',
            price: 0.15
        }),
        Products.create({
            SKU: 'VR-LM317',
            description: 'Voltage Regulator - LM317',
            price: 0.15
        }),
        Products.create({
            SKU: 'MOSFET-IRF540',
            description: 'MOSFET - IRF540',
            price: 0.19
        }),
        Products.create({
            SKU: 'MOSFET-IRF640',
            description: 'MOSFET - IRF640',
            price: 0.19
        }),
        Products.create({
            SKU: 'TIP120',
            description: 'NPN Darlington Transistor',
            price: 0.04
        }),
        Products.create({
            SKU: 'TIP125',
            description: 'PNP Darlington Transistor ',
            price: 0.04 
        }),
        Products.create({
            SKU: '7SEG-COM-AN',
            description: '7-Segment Display - Common Anode',
            price: 1.05
        }),
        Products.create({
            SKU: '7SEG-COM-CAT',
            description: '7-Segment Display - Common Cathode',
            price: 1.05
        }),
        Products.create({
            SKU: 'RELAY-12V',
            description: 'Relay - 12V DC',
            price: 1.00
        }),
        Products.create({
            SKU: 'RELAY-5V',
            description: 'Relay - 5V DC',
            price: 1.00
        }),
        Products.create({
            SKU: 'CRYSTAL-16MHZ',
            description: 'Crystal - 16 MHz',
            price: 4.00
        }),
        Products.create({
            SKU: 'CRYSTAL-20MHZ',
            description: 'Crystal - 20 MHz',
            price: 4.00
        }),
        Products.create({
            SKU: 'MCU-ATmega328P',
            description: 'Microcontroller - ATmega328P',
            price: 5.49
        }),
        Products.create({
            SKU: 'MCU-ATtiny85',
            description: 'Microcontroller - ATtiny85',
            price: 5.49
        }),
        Products.create({
            SKU: 'LCD-16x2',
            description: 'LCD Display - 16x2',
            price: 1.05
        }),
        Products.create({
            SKU: 'LCD-20x4',
            description: 'LCD Display - 20x4',
            price: 1.05
        }),
        Products.create({
            SKU: 'POT-10K',
            description: 'Potentiometer - 10K Ohm',
            price: 7.99
        }),
        Products.create({
            SKU: 'POT-100K',
            description: 'Potentiometer - 100K Ohm',
            price: 7.99
        }),
        Products.create({
            SKU: 'SWITCH-TACTILE',
            description: 'Tactile Switch',
            price: 5.99
        }),
        Products.create({
            SKU: 'SWITCH-PUSH',
            description: 'Push Button Switch',
            price: 5.99
        }),
        Products.create({
            SKU: 'SWITCH-DIP-8',
            description: 'DIP Switch - 8 Position',
            price: 4.99
        }),
        Products.create({
            SKU: 'ENCODER-ROTARY',
            description: 'Rotary Encoder',
            price: 3.99
        }),
        Products.create({
            SKU: 'BUZZER-PIEZO',
            description: 'Piezo Buzzer',
            price: 0.39
        }),
        Products.create({
            SKU: 'SPEAKER-8OHM',
            description: 'Speaker - 8 Ohm',
            price: 3.99
        }),
        Products.create({
            SKU: 'USONIC-HC-SR04',
            description: 'Ultrasonic Sensor - HC-SR04',
            price: 0.49
        }),
        Products.create({
            SKU: 'SENSOR-PIR',
            description: 'PIR Motion Sensor',
            price: 0.49
        }),
        Products.create({
            SKU: 'SENSOR-LM35',
            description: 'Temperature Sensor - LM35',
            price: 0.99
        }),
        Products.create({
            SKU: 'SENSOR-DHT11',
            description: 'Humidity Sensor - DHT11',
            price: 1.09
        }),
        Products.create({
            SKU: 'LDR',
            description: 'Light Dependent Resistor',
            price: 0.29
        }),
        Products.create({
            SKU: 'IR-RECEIVER',
            description: 'Infrared Receiver',
            price: 0.29
        }),
        Products.create({
            SKU: 'IR-LED',
            description: 'Infrared LED',
            price: 0.89
        }),
        Products.create({
            SKU: 'UV-LED',
            description: 'Ultraviolet LED',
            price: 0.89
        }),
        Products.create({
            SKU: 'OLED-0.96',
            description: 'OLED Display - 0.96"',
            price: 1.09
        }),
        Products.create({
            SKU: 'OLED-1.3',
            description: 'OLED Display - 1.3"',
            price: 1.29
        })
    ])
}

module.exports = productsSeeder