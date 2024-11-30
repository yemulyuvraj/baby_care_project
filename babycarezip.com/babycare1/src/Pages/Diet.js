import React, { useState } from 'react';

const dietData = {
  baby: {
    '0-6 months': [
      { name: 'Breast Milk', image: '/images/start.jpeg' },
      { name: 'Formula Milk', image: '/images/formulamilk.webp' },
    ],
    '6-12 months': [
      { name: 'Mashed Banana', image: '/images/Banana.jpg' },
      { name: 'Mashed Avocado', image: '/images/Avacodo.jpg' },
      { name: 'Mashed Apple', image: '/images/Apple.jpg' },
      { name: 'Mashed Pear', image: '/images/Pear.jpg' },
      { name: 'Mashed Potato', image: '/images/MashedPotato.jpg' },
      { name: 'Carrot', image: '/images/Carrot.jpg' },
      { name: 'Broccoli', image: '/images/brocli.jpg' },
      { name: 'Beetroot', image: '/images/Beetroot.jpg' },
      { name: 'Yogurt', image: '/images/Yougurt.jpg' },
      { name: 'Idli', image: '/images/Idli.jpg' },
      { name: 'Ragi', image: '/images/Ragi.webp' },
      { name: 'Fruit Juice', image: '/images/Juice.jpg' },
      { name: 'Oatmeal', image: '/images/oatmeal.avif' },
      { name: 'Tofu', image: '/images/Tofu.jpg' },
      { name: 'Boiled Egg', image: '/images/Egg.jpg' },
    ],
    '1-2 years': [
      { name: 'Bananas', image: '/images/Banana.jpg' },
      { name: 'Peaches', image: '/images/peaches.jpeg' },
      { name: 'Steamed Broccoli', image: '/images/brocli.jpg' },
      { name: 'Steamed Carrot', image: '/images/Carrot.jpg' },
      { name: 'Whole Grain Bread', image: '/images/wholeGrainBread.jpeg' },
      { name: 'Boiled Egg', image: '/images/Egg.jpg' },
      { name: 'Brown Rice', image: '/images/brownrice.jpg' },
      { name: 'Oatmeal', image: '/images/oatmeal.avif' },
      { name: 'Whole Grain Crackers', image: '/images/wholeGarinCrackers.jpeg' },
      
      { name: 'Nut Butter', image: '/images/nutButter.jpg' },
      { name: 'Veggie Sticks', image: '/images/veggieSticks.avif' },
      { name: 'Tofu', image: '/images/Tofu.jpg' },
      { name: 'Lean Meat', image: '/images/leanmeat.jpg' },
      { name: 'Yogurt', image: '/images/Yougurt.jpg' },
      { name: 'Cheese', image: '/images/chesse.jpg' },
      { name: 'Beans And Legumes', image: '/images/beansAndLegumes.webp' },
    ],
  },
  pregnant: {
    '1-3 months': [
      { name: 'Nuts', image: '/images/nuts.jpg' },
      { name: 'Oats', image: '/images/Otas.jpg' },
      { name: 'Lean Meat', image: '/images/leanmeat.jpg' },
      { name: 'Leafy Greens', image: '/images/Leafygrains.jpg' },
      { name: 'Chickpeas', image: '/images/chikpease.jpg' },
      { name: 'Brown Rice', image: '/images/brownrice.jpg' },
      { name: 'Brown Bread', image: '/images/Browniebread.jpg' },
      { name: 'Tofu', image: '/images/Tofu.jpg' },
      { name: 'Milk', image: '/images/Milk.jpg' },
      { name: 'Orange', image: '/images/orange.jpg' },
      { name: 'Egg', image: '/images/Egg.jpg' },
      { name: 'Banana', image: '/images/Banana.jpg' },
      { name: 'Cheese', image: '/images/chesse.jpg' },
      { name: 'Salmon', image: '/images/sealmon.jpg' },
      { name: 'Berries', image: '/images/berries.jpg' },
      { name: 'Herbal Tea', image: '/images/Herbaltea.jpg' },
    ],
    '4-6 months': [
      { name: 'Poultry', image: '/images/poultry.jpg' },
      { name: 'Lean Meat', image: '/images/leanmeat.jpg' },
      { name: 'Salmon', image: '/images/sealmon.jpg' },
      { name: 'Peppers', image: '/images/Peppers.jpg' },
      { name: 'Mango', image: '/images/mango.jpg' },
      { name: 'Zucchini', image: '/images/zucchini.jpg' },
      { name: 'Berries', image: '/images/berries.jpg' },
      { name: 'Nuts', image: '/images/nuts.jpg' },
      { name: 'Oatmeal', image: '/images/oatmeal.avif' },
      { name: 'Spinach', image: '/images/spinach.webp' },
      { name: 'Beans And Legumes', image: '/images/beansAndLegumes.webp' },
      { name: 'Salmon And Sardines', image: '/images/salmonAndSardines.avif' },
      { name: 'Avocado', image: '/images/Avacodo.jpg' },
      { name: 'Brown Bread', image: '/images/Browniebread.jpg' },
    ],
    '7-9 months': [
      { name: 'Cauliflower', image: '/images/Cauliflower.jpg' },
      { name: 'Pineapple', image: '/images/pinneapple.jpg' },
      { name: 'Lean Meat', image: '/images/leanmeat.jpg' },
      { name: 'Kiwi', image: '/images/kiwi.jpg' },
      { name: 'Cherry', image: '/images/cherry.jpg' },
      { name: 'Beans', image: '/images/beans.jpg' },
      { name: 'Plenty of Water', image: '/images/plentyWater.avif' },
      { name: 'Herbal Tea', image: '/images/Herbaltea.jpg' },
      { name: 'Asparagus', image: '/images/Aspragus.jpg' },
      { name: 'Egg', image: '/images/Egg.jpg' },
      { name: 'Grapefruit', image: '/images/grapefruits.jpg' },
      { name: 'Oranges', image: '/images/oranges.jpeg' },
      { name: 'Sweet Potatoes', image: '/images/sweetpotato.avif' },
      { name: 'Yogurt', image: '/images/Yougurt.jpg' },
      { name: 'Oatmeal', image: '/images/oatmeal.avif' },
    ],
  },
};

const DietSection = () => {
  const [category, setCategory] = useState('');
  const [stage, setStage] = useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleStageChange = (e) => setStage(e.target.value);

  const diets = dietData[category]?.[stage] || [];

  return (
    <div
      style={{
        backgroundImage: "url(/images/Diet.webp)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
        <center>
          <select onChange={handleCategoryChange} value={category}>
            <option value="">Select Category</option>
            <option value="baby">Baby (0-2 years)</option>
            <option value="pregnant">Pregnant Women (0-9 months)</option>
          </select>
        </center>

        <br /><br />
        <center>
          {category && (
            <select onChange={handleStageChange} value={stage}>
              <option value="">Select Stage</option>
              {Object.keys(dietData[category]).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          )}
        </center>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '20px', justifyContent: 'center' }}>
          {diets.map((diet, index) => (
            <div key={index} style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '10px', width: '150px' }}>
              <img src={diet.image} alt={diet.name} style={{ width: '100%', height: '150px', borderRadius: '10px' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>{diet.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietSection;
