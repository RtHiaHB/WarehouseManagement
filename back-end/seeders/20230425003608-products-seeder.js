'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const productData = []
    productData.push({
      prod_id: 0,
      sku: 'NONE',
      description: 'none',
      price: 0.00
    })
    productData.push({
      prod_id: 1, 
      sku: 'RES-1K-1/4W',
      description: 'Resistor 1/4W - 1k Ohm',
      price: 0.55
    })
    productData.push({
      prod_id: 2,
      sku: 'RES-10k-1/4W',
      description: 'Resistor 1/4W - 10k Ohm',
      price: 0.69
    })
    productData.push({
      prod_id: 3,
      sku: 'CAP-100nF',
      description: 'Capacitor 100nF',
      price: 0.22
    })
    productData.push({
      prod_id: 4,
      sku: 'CAP-1uF',
      description: 'Capacitor 1uF',
      price: 0.69
    })
    productData.push({
      prod_id: 5,
      sku: 'CAP-10uF',
      description: 'Capacitor',
      price: 1.09
    })
    productData.push({
      prod_id: 6,
      sku: 'LED-RED',
      description: 'LED - Red',
      price: 0.29
    })
    productData.push({
      prod_id: 7,
      sku: 'LED-GREEN',
      description: 'LED - Green',
      price: 0.29
    })
    productData.push({
      prod_id: 8,
      sku: 'LED-BLUE',
      description: 'LED - Blue',
      price: 0.29
    })
    productData.push({
      prod_id: 9,
      sku: 'DIODE-1N4148',
      description: 'Diode - 1N4148',
      price: 0.05
    })
    productData.push({
      prod_id: 10,
      sku: 'DIODE-1N4001',
      description: 'Diode - 1N4001',
      price: 0.05
    })
    productData.push({
      prod_id: 11,
      sku: 'TRANS-2N3906',
      description: 'Transistor - 2N3906',
      price: 0.04
    })
    productData.push({
      prod_id: 12, 
      sku: 'OPAMP-LM741',
      description: 'Op-Amp - LM741',
      price: 0.09
    })
    productData.push({
      prod_id: 13,
      sku: 'OPAMP-LM358',
      description: 'Op-Amp - LM358',
      price: 0.09
    })
    productData.push({
      prod_id: 14,
      sku: 'VR-LM7805',
      description: 'Voltage Regulator - LM7805',
      price: 0.15
    })
    productData.push({
      prod_id: 15,
      sku: 'VR-LM7812',
      description: 'Voltage Regulator - LM7812',
      price: 0.15
    })
    productData.push({
      prod_id: 16,
      sku: 'VR-LM317',
      description: 'Voltage Regulator - LM317',
      price: 0.15
    })
    productData.push({
      prod_id: 17,
      sku: 'MOSFET-IRF540',
      description: 'MOSFET - IRF540',
      price: 0.19
    })
    productData.push({
      prod_id: 18,
      sku: 'MOSFET-IRF640',
      description: 'MOSFET - IRF640',
      price: 0.19
    })
    productData.push({
      prod_id: 19,
      sku: 'TIP120',
      description: 'NPN Darlington Transistor',
      price: 0.04
    })
    productData.push({
      prod_id: 20,
      sku: 'TIP125',
      description: 'PNP Darlington Transistor ',
      price: 0.04
    })
    productData.push({
      prod_id: 21,
      sku: '7SEG-COM-AN',
      description: '7-Segment Display - Common Anode',
      price: 1.05
    })
    productData.push({
      prod_id: 22,
      sku: '7SEG-COM-CAT',
      description: '7-Segment Display - Common Cathode',
      price: 1.05
    })
    productData.push({
      prod_id: 23, 
      sku: 'RELAY-12V',
      description: 'Relay - 12V DC',
      price: 1.00
    })
    productData.push({
      prod_id: 24,
      sku: 'RELAY-5V',
      description: 'Relay - 5V DC',
      price: 1.00
    })
    productData.push({
      prod_id: 25,
      sku: 'CRYSTAL-16MHZ',
      description: 'Crystal - 16 MHz',
      price: 4.00
    })
    productData.push({
      prod_id: 26,
      sku: 'CRYSTAL-20MHZ',
      description: 'Crystal - 20 MHz',
      price: 4.00
    })
    productData.push({
      prod_id: 27,
      sku: 'MCU-ATmega328P',
      description: 'Microcontroller - ATmega328P',
      price: 5.49
    })
    productData.push({
      prod_id: 28,
      sku: 'MCU-ATtiny85',
      description: 'Microcontroller - ATtiny85',
      price: 5.49
    })
    productData.push({
      prod_id: 29,
      sku: 'LCD-16x2',
      description: 'LCD Display - 16x2',
      price: 1.05
    })
    productData.push({
      prod_id: 30,
      sku: 'LCD-20x4',
      description: 'LCD Display - 20x4',
      price: 1.05
    })
    productData.push({
      prod_id: 31,
      sku: 'POT-10K',
      description: 'Potentiometer - 10K Ohm',
      price: 7.99
    })
    productData.push({
      prod_id: 32,
      sku: 'POT-100K',
      description: 'Potentiometer - 100K Ohm',
      price: 7.99
    })
    productData.push({
      prod_id: 33,
      sku: 'SWITCH-TACTILE',
      description: 'Tactile Switch',
      price: 5.99
    })
    productData.push({
      prod_id: 34,
      sku: 'SWITCH-PUSH',
      description: 'Push Button Switch',
      price: 5.99
    })
    productData.push({
      prod_id: 35,
      sku: 'SWITCH-DIP-8',
      description: 'DIP Switch - 8 Position',
      price: 4.99
    })
    productData.push({
      prod_id: 36,
      sku: 'ENCODER-ROTARY',
      description: 'Rotary Encoder',
      price: 3.99
    })
    productData.push({
      prod_id: 37,
      sku: 'BUZZER-PIEZO',
      description: 'Piezo Buzzer',
      price: 0.39
    })
    productData.push({
      prod_id: 38,
      sku: 'SPEAKER-8OHM',
      description: 'Speaker - 8 Ohm',
      price: 3.99
    })
    productData.push({
      prod_id: 39,
      sku: 'USONIC-HC-SR04',
      description: 'Ultrasonic Sensor - HC-SR04',
      price: 0.49
    })
    productData.push({
      prod_id: 40,
      sku: 'SENSOR-PIR',
      description: 'PIR Motion Sensor',
      price: 0.49
    })
    productData.push({
      prod_id: 41,
      sku: 'SENSOR-LM35',
      description: 'Temperature Sensor - LM35',
      price: 0.99
    })
    productData.push({
      prod_id: 42,
      sku: 'SENSOR-DHT11',
      description: 'Humidity Sensor - DHT11',
      price: 1.09
    })
    productData.push({
      prod_id: 43,
      sku: 'LDR',
      description: 'Light Dependent Resistor',
      price: 0.29
    })
    productData.push({
      prod_id: 44,
      sku: 'IR-RECEIVER',
      description: 'Infrared Receiver',
      price: 0.29
    })
    productData.push({
      prod_id: 45,
      sku: 'IR-LED',
      description: 'Infrared LED',
      price: 0.89
    })
    productData.push({
      prod_id: 46,
      sku: 'UV-LED',
      description: 'Ultraviolet LED',
      price: 0.89
    })
    productData.push({
      prod_id: 47,
      sku: 'OLED-0.96',
      description: 'OLED Display - 0.96"',
      price: 1.09
    })
    productData.push({
      prod_id: 48,
      sku: 'OLED-1.3',
      description: 'OLED Display - 1.3"',
      price: 1.29
    })
    productData.push({
      prod_id: 49,
      sku: 'TRANS-2N3904',
      description: 'Transistor - 2N3904',
      price: 0.04
    })
    await queryInterface.bulkInsert('products', productData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {})
  }
};
