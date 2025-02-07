import { GoogleGenerativeAI } from "@google/generative-ai"


const bussinessInformation = `
1. What type of foods should I eat to maintain good health?

Answer: To maintain optimal health, aim for a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Consider consulting a nutritionist for a personalized meal plan.
2. How can I improve my overall fitness?

Answer: Regular physical activity, including aerobic exercises (walking, running, swimming) and strength training (weights, resistance bands), is key. Start with 30 minutes of moderate activity most days of the week.
3. What are the essential vitamins and supplements I should take?

Answer: Common essential vitamins include Vitamin D, B12, and Omega-3 fatty acids. However, consult a healthcare professional to determine what suits your specific needs.
4. Can you recommend shops for healthy food options?

Answer: Local health food stores and organic markets are great for fresh, wholesome foods. Look for stores that offer organic produce, gluten-free options, and natural supplements. Specific store recommendations can be tailored based on your location.
5. Where can I find vitamins and health supplements nearby?

Answer: Pharmacies, health-focused grocery stores, and vitamin specialty shops are reliable sources for high-quality vitamins and supplements. Consider online options as well for more convenience.
6. How can I manage stress effectively?

Answer: Stress management includes practices such as mindfulness meditation, deep breathing exercises, regular physical activity, and sufficient sleep. Therapy or counseling may also be beneficial if stress is chronic.
7. What are the best ways to monitor my health at home?

Answer: Home health monitoring tools, such as blood pressure monitors, glucose meters, and wearable fitness trackers, can help. Keeping track of your diet, exercise, and sleep patterns is also important.
8. How do I know if I need to see a doctor?

Answer: Seek medical advice if you experience persistent symptoms such as unexplained pain, fever, fatigue, or changes in your health status. Preventative visits to your doctor are also recommended annually.
9. How can I improve my sleep habits?

Answer: Establish a regular sleep schedule, avoid caffeine and heavy meals before bed, and create a calm, dark sleeping environment. Aim for 7-9 hours of sleep each night.
10. Where can I find health consultations or professional advice?

Answer: Many healthcare providers offer virtual consultations. You can also visit local clinics, wellness centers, or seek a dietitian or mental health professional depending on your needs.
Sample Instructions for Patients
Meal Preparation: “For a balanced meal, include 3-4 servings of vegetables, 2 servings of fruit, lean protein (chicken, tofu, fish), and whole grains (brown rice, quinoa).”

Physical Activity: “Aim for 30 minutes of moderate exercise at least five days a week. This can include brisk walking, yoga, or swimming.”

Shopping Tips: “Look for stores that offer fresh produce, organic products, and health supplements. Check out places like Whole Foods or your local health food store for quality selections.”

Hydration: “Drink at least 8 cups (2 liters) of water per day to stay hydrated. Limit sugary drinks and caffeinated beverages.”

Mindfulness and Relaxation: “Take 5-10 minutes each day to practice deep breathing or meditation. This can help reduce stress and improve focus.”

Rest and Recovery: “Aim to go to bed at the same time each night to establish a healthy sleep routine. Limit screen time 30 minutes before bed to improve sleep quality.”

Shops and Resources
Health Food Stores: Whole Foods, Trader Joe's, or local organic markets.
Pharmacies: Walgreens, CVS, or local independent pharmacies for vitamins and over-the-counter health products.
Fitness Centers: Local gyms, fitness studios, or even community centers with fitness programs.

Detailed Health Management FAQs
1. What should I eat to maintain a balanced diet?

Answer: A balanced diet includes:
Fruits and Vegetables: Aim for a variety of colors and types. Half your plate should be filled with vegetables at each meal.
Whole Grains: Brown rice, quinoa, whole wheat bread, oats, and whole-grain pasta. These provide fiber and essential nutrients.
Proteins: Choose lean proteins such as fish (especially oily fish like salmon), chicken, legumes (beans, lentils), tofu, or eggs. Try to include plant-based proteins as well.
Healthy Fats: Avocados, nuts (almonds, walnuts), seeds, and oils such as olive oil or coconut oil.
Dairy: Choose low-fat or non-fat dairy products, or plant-based alternatives like almond or oat milk.
Limit Processed Foods: Reduce your intake of sugary snacks, sodas, and processed meats (bacon, sausages).
2. How do I build a fitness routine?

Answer: Your routine should focus on different types of exercises:
Cardiovascular: Activities that get your heart rate up, like walking, jogging, cycling, or swimming. Aim for 150 minutes of moderate activity per week.
Strength Training: This can include weight lifting, resistance bands, or bodyweight exercises (push-ups, squats, lunges). Aim for at least two days a week.
Flexibility: Include yoga or stretching exercises to improve flexibility and reduce injury risk.
Consistency: Start small, then gradually increase your workout intensity and duration over time. A well-rounded fitness routine helps build endurance, strength, and flexibility.
3. How can I manage mental health and reduce stress?

Answer: Mental health is just as important as physical health. Some effective strategies for stress management include:
Mindfulness and Meditation: Practice deep breathing or mindfulness for 10 minutes a day to stay calm and focused.
Physical Activity: Regular exercise can help reduce anxiety and improve mood. Even a short daily walk can boost mental health.
Sleep Hygiene: Getting enough rest (7-9 hours per night) is crucial for mental and physical health. Follow a consistent bedtime routine and avoid screens before sleep.
Social Connection: Stay in touch with loved ones and build a strong support system.
Therapy: Professional support, such as therapy or counseling, can provide tools to handle stress and other mental health challenges.
4. How do I know what supplements to take?

Answer: Supplements can complement a healthy diet, but they shouldn't replace it. Common supplements include:
Multivitamins: General daily nutrients that may be missing from your diet.
Vitamin D: Helps with bone health and immune function, especially if you don't get enough sun exposure.
Omega-3 Fatty Acids: Found in fish oil, helps with heart health.
Probiotics: Beneficial for gut health, found in fermented foods or supplements.
Magnesium: Can help with muscle function and sleep.
Consult a Professional: Always check with a healthcare provider before starting any supplement to ensure it is necessary for you.
Health Shopping Guide
Here are more details on where to find health-related products, both online and locally:

1. Healthy Food Stores:

Whole Foods Market: A premium grocery store offering a wide selection of organic produce, healthy packaged goods, gluten-free options, and a variety of dietary supplements.
Trader Joe’s: Known for its affordable organic and specialty health products. Offers healthy snacks, fresh produce, and unique food options like frozen meals with fewer preservatives.
Local Organic Markets: Many cities have local health markets where you can find farm-fresh produce, grass-fed meats, and organic products. Check out the local farmers' markets for fresh, local produce.
2. Vitamin and Supplement Stores:

The Vitamin Shoppe: Offers a wide range of vitamins, supplements, herbal remedies, and protein powders. They also have a knowledgeable staff to assist with product recommendations.
GNC: A popular store that offers vitamins, minerals, protein supplements, and weight management products. They also offer personalized health plans based on your goals.
Local Pharmacies: Major chain pharmacies like Walgreens, CVS, or Boots often have a wide selection of vitamins and health supplements.
3. Fitness Centers and Sporting Goods Stores:

Local Gyms and Fitness Studios: Find a nearby gym that suits your needs (e.g., weight training, cardio, yoga). Consider specialized studios for activities like Pilates or spin classes.
Sporting Goods Stores: Dick’s Sporting Goods or REI carry fitness equipment, activewear, and accessories such as resistance bands, dumbbells, yoga mats, etc.
Health Tips for Patients
Here’s a list of more actionable health tips you can share with your patients:

Eat Small, Frequent Meals: Instead of large meals, try eating smaller portions every 3-4 hours to maintain energy and stabilize blood sugar levels.
Limit Sugar Intake: High sugar intake contributes to various health issues like weight gain and diabetes. Opt for natural sugar from fruits instead of processed sugars.
Stay Hydrated: Drinking water is essential for digestion, circulation, and overall health. Carry a water bottle with you throughout the day to ensure you’re staying hydrated.
Balance Your Hormones: Manage stress levels, sleep well, and eat foods rich in omega-3 fatty acids and vitamins to support hormonal balance.
Practice Portion Control: Use smaller plates, eat slowly, and listen to your body to avoid overeating.
Personalized Health Care Suggestions
Sleep Quality Improvement: “Establish a bedtime routine: Dim the lights an hour before bed, avoid caffeine after 2 pm, and try reading or listening to calming music before sleep.”
Health Tracking: “Using an app or wearable device, you can track your steps, workouts, and sleep patterns to get a clear picture of your daily health habits.”
Weight Management: “Focus on long-term lifestyle changes rather than quick fixes. Combine balanced eating with regular exercise and practice mindful eating.”

`;


const API_KEY = "AIzaSyDi5jqwnzYchxZB173SxaiLwRMI2gu_gFQ";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: bussinessInformation
});

let messages = {
    history: [],
}

async function sendMessage(){

    console.log(messages);

    const userMessage = document.querySelector(".chat-window input").value
    
    if(userMessage.length){

        try{

            document.querySelector(".chat-window input").value = "";
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend",`
                <div class="user">
                    <p>${userMessage}</p>
                </div>`);

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend",`
               <div class="loader"> `);

            const chat = model.startChat(messages);
              
              let result = await chat.sendMessage(userMessage);

              document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend",`
                <div class="model">
                    <p>${result.response.text()}</p>
                </div>`);

            messages.history.push({
                role: "user",
                parts: [{ text: userMessage }],
            });

            messages.history.push({
                role: "model",
                parts: [{ text: result.response.text() }],
            });

            console.log(result.response.text());
        }
        catch(error){

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend",`
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>`);
        }

        document.querySelector(".chat-window .chat .loader").remove();
    }
    
}

document.querySelector(".chat-window .input-area button")
.addEventListener("click", ()=>sendMessage());