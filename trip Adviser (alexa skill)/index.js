'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const SKILL_NAME = 'Trip Adviser';
const HELP_MESSAGE = 'You can say tell me about India, or,what should do before going to India, or,tourist places in India, or,you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
var newDatatwo = 'you have to do: ';


// var dataone = [ 
//        "Agra:North Indian city with Mughal Empire landmarks like the Taj Mahal mausoleum & red-walled Agra Fort.",

//        "Delhi:India's capital has Mughal-era Red Fort, Jama Masjid mosque & national monuments along the Rajpath.",

//        "Jaipur: Known as 'Pink City' for colored palaces & other 18th-century structures, including an observatory.",

//        "Dharamshala:Hillside city in Himachal Pradesh, home to the Dalai Lama, rich Tibetan culture & mountain trails.",

//        "Bengaluru:India tech hub known for parks, nightlife, Bangalore Palace & Lalbagh Botanical Garden.",

//        "Shimla:Himachal Pradesh capital known for colonial architecture, Himalayan views & shopping on The Mall.",

//        "Chennai:City known for Tamil classical music & dance, plus Kapaleeshwarar Temple & colonial Fort St. George.",

//        "Amritsar:Sikh cultural & spiritual center, home to the Golden Temple complex & pilgrimage site.",

//        "Haridwar:Ancient city on the River Ganges, known for Hindu festivals, hilltop temples & Har Ki Pauri ghat.",

//        "Darjeeling:Indian hill town known for tea plantations, Himalayan views & 'Toy Train' narrow-gauge railway.",

//        "Kolkata: West Bengal capital home to Mother Teresa's tomb, British-colonial architecture & art galleries.",

//        "New Delhi: Temples, shopping, tombs, monuments, and zoos",

//        "Varanasi:Sacred Ganges River city with some 2,000 Hindu temples (including Kashi Vishwanath) & Ramnagar Fort.",

//        "Mumbai:Massive city, home to Bollywood, grand colonial buildings & bazaars packed with antiques & textiles.",

//        "Udaipur:Rajasthan city known for lavish palaces, Jagdish Temple & artificial lakes, including Lake Pichola.",

//        "Jodhpur:Indian city in Rajasthan known for light-blue buildings, clifftop Mehrangarh Fort & grand palaces.",

//        "Goa:State in India known for Arabian Sea beaches & European-style churches like Se Cathedral in Old Goa.",

//        "Manali: Himachal Pradesh:Himalayan resort town & backpacking center with nearby skiing & hot springs, plus Old Manali.",

//        "Dehradun:Indian city by the Himalayan foothills, home to Ghanta Ghar clock tower, religious sites & wildlife.",

//        "Mount Abu:Indian hill station on a forested mountain, known for Nakki Lake & the ornate Dilwara Temples.",

//        "Port Blair:Capital city of India’s Andaman & Nicobar Islands, known for museums & the Cellular Jail memorial.",

//        "Pune:Sprawling city in Maharashtra with Hindu temples, Maratha Empire landmarks & Mahatma Gandhi's ashes.",

//        "Aurangabad:Indian city known for the Bibi ka Maqbara shrine, Aurangaba, India, with Kumarakom Bird Sanctuary & Thazhathangady Mosque.",

//        "Nainital:British Raj-era mountain resort town with Nainital Lake boating, scenic viewpoints & hiking.",

//        "Ajmer:Indian city known for the Sharif Dargah Sufi shrine, Ajmer Government Museum & Mayo College.",

//        "Ahmedabad:Large Gujarat city known for the Gandhi Ashram, Calico Museum of Textiles & distinctive pols.",

//        "Pondicherry:Indian coastal town known for its French Quarter, seaside promenade & Paradise Beach.",

//        "Pushkar:Hindu pilgrimage town on a sacred lake, with hundreds of temples, including one devoted to Brahma.",

//        "Chandigarh:ndian city known for its themed gardens, Le Corbusier's Capitol Complex, plus art & doll museums.",

//        "Khajuraho Group of Monuments:Temples, sculpture, safaris, and monuments.",
        
//        "Gangtok:Sikkim capital & Himalayan trekking base also home to Buddhist sites & Gangtok Ropeway gondola.",

//        "Hampi:Ancient Indian village dotted with Vijayanagara ruins & known for Virupaksha Temple & Hampi Bazaar.",

//        "Mysore:Indian city with ornate Wodeyar palaces like Mysore Palace, plus Hindu temples & Devaraja Market."
// ];


var datatwo = [

        "1st. Plan your itinerary, but be flexible: India is a large country, and most people spend a few weeks traveling in order to enjoy its beauty and varied cultures. However, its infrastructure isn't of the best quality in all regions, so you should always plan your itinerary before you leave. -For all others, make sure you have a good and current map of the country and reserve any flights, boat trips, train rides, and rental cars ahead of time.-Also make your hotel or hostel reservations before you embark on your India trip, or at the very least have a list of addresses where you can stay.",

        "2nd. Apply for your travel documents: You'll need a valid passport to travel, as well as a 6-month tourist visa for India. You can apply for a passport at your local post office.You can contact the Indian embassy in your country to apply for a tourist visa. You will be asked to supply a list of regions you'll be visiting, as well as addresses where you'll be staying.",

        "3rd. Visit your doctor for immunizations and other travel-related medical treatments: The vaccination requirements for the different regions of India may vary from time to time, so you should always discuss which immunizations you need before you travel, though usually tetanus, typhoid, and cholera are advised. You should allow up to 6 weeks for any vaccinations to take effect. Other medical issues to be prepared for are malaria and diarrhea.",

        "4th. Make a packing list: Though what you need to bring with you will vary greatly depending on the types of activities you plan to do and the areas you plan to visit, you should always bring enough clothes, sunscreen, insect repellent, a sunhat, a first aid kit, and a money belt.",

        "5th. Prepare your finances: Though India is very affordable by Western standards, you should also realize that you'll need lots of cash, as many places don't accept credit cards or checks. Bring travelers' checks, which you can cash in at many stops along the way, and make a note to get rupees as soon as you land in India.",

        "6th. Educate yourself about food and drinking safety: The rule of thumb in India is to only drink bottled water, never eat uncooked foods, and never drink beverages with ice in them. If you live by this rule during your travels, you stand a better chance of not getting sick.",
        
        "7th. Go to the Incredible India website: This has a number of useful resources under the 'Trip Planner' drop down menu that will help you plan your trip, including an extensive calendar of festivals so you can either find out what's going on while you're in India, or plan your trip around a certain festival.",

        "and last. Understand how to communicate with the locals: As always when traveling, safety should be your primary concern. Most rickshaw drivers and vendors expect you to haggle over prices, but you should also remember to tip. In addition, never go anywhere with somebody you don't trust, or allow anybody to take care of your personal belongings."
];

var placesdata = [
         "Agra",
         "Delhi",
         "Jaipur",
         "Dharamshala",
         "Bengaluru",
         "Shimla",
         "Chennai",
         "Chandigarh",
         "Amritsar",
         "Haridwar",
         "Darjeeling",
         "Kolkata",
         "New Delhi",
         "Varanasi",
         "Mumbai",
         "Udaipur",
         "Jodhpur",
         "Goa",
         "Manali",
         "Dehradun",
         "Mount Abu",
         "Port Blair",
         "Pune",
         "Aurangabad",
         "Nainital",
         "Ajmer",
         "Ahmedabad",
         "Pondicherry",
         "Pushkar",
         "Chandigarh",
         "Khajuraho",
         "Gangtok",
         "Mysore",
         "Hampi and more"
 
];


const handlers = {
    'LaunchRequest': function () {
        this.emit('AboutIndia');
    },
   

    'AboutIndia':function(){
        this.emit(':tell','India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. In the north, Mughal Empire landmarks include Delhi’s Red Fort complex and massive Jama Masjid mosque, plus Agra’s iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi, and Rishikesh is a yoga centre and base for Himalayan trekking.');
    },

    'TouristPlaces':function(){
        
         const touristPlaces = placesdata;
                this.emit(':tell','Here list of Tourist Places in India: '+`${touristPlaces}`);


      //    for(var i= 0; i <touristPlaces.length; i++){

      //       var newDataone;
      //       newDataone += '..'+touristPlaces[i];
            
      //  }
      //              this.emit(':tell',`${newDataone}`);
 
        
       this.emit(':responseReady');


       
         },

    'ShouldKnow':function(){
         const shouldKnow = datatwo;

         for(var i= 0; i <shouldKnow.length; i++){

            
          newDatatwo += " "+shouldKnow[i];

            
        }
          this.emit(':tell',`${newDatatwo}`);

            
        
        this.emit(':responseReady');



    },   


    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
