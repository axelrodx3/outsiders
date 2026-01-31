export default function Menus() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white text-center mb-12">Menus</h1>

        {/* Brunch */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Brunch</h2>
            <p className="text-tavern-silver text-sm mt-1">Sundays 11:30 AM – 2:30 PM</p>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Shrimp & Grits</h3>
                <span className="text-tavern-silver whitespace-nowrap">$18</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Creamy cheese grits with blackened shrimp, topped with chopped bacon and scallions.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Steak Breakfast Platter</h3>
                <span className="text-tavern-silver whitespace-nowrap">$28</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">10 oz NY Strip with two eggs, breakfast potatoes, and choice of toast.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Burrito</h3>
                <span className="text-tavern-silver whitespace-nowrap">$13</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Scrambled eggs, breakfast potatoes, cheddar cheese, with choice of bacon or sausage in a flour tortilla. Served with a side of salsa.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Bottomless Mimosas</h3>
                <span className="text-tavern-silver whitespace-nowrap">$15</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">(2 hour limit)</p>
            </div>
          </div>
        </section>

        {/* Salads */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Salads</h2>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">The Choppa</h3>
                <span className="text-tavern-silver whitespace-nowrap">$15</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Mixed greens, grilled chicken, chopped bacon, cherry tomatoes, cucumber, red onion, cheddar cheese, croutons, choice of dressing.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">The Metalhead</h3>
                <span className="text-tavern-silver whitespace-nowrap">$12</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Arugula, spring mix, dried cranberries, candied walnuts, cucumber, red onion, feta cheese, honey balsamic vinaigrette. Add grilled chicken +$5</p>
            </div>
          </div>
        </section>

        {/* Sandwiches & Wraps */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Sandwiches & Wraps</h2>
            <p className="text-tavern-silver/90 text-sm mt-1">Served with fries. Substitute for onion rings, sweet potato fries, or tater tots +$2.</p>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Eastbound & Down</h3>
                <span className="text-tavern-silver whitespace-nowrap">$13</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Pulled pork, mac & cheese, BBQ sauce, pickled jalapeños, toasted brioche bun.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Studio 54</h3>
                <span className="text-tavern-silver whitespace-nowrap">$14</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Grilled chicken, bacon, swiss cheese, lettuce, tomato, red onion, spicy mayo, toasted brioche bun.</p>
            </div>
          </div>
        </section>

        {/* Opening Acts (Appetizers) */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Opening Acts (Appetizers)</h2>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Bang Bang Shrimp</h3>
                <span className="text-tavern-silver whitespace-nowrap">$14</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Fried shrimp tossed in spicy aioli.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Loaded Tater Tots</h3>
                <span className="text-tavern-silver whitespace-nowrap">$12</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Topped with cheese, bacon, sour cream, scallions.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Fried Pickles</h3>
                <span className="text-tavern-silver whitespace-nowrap">$9</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Served with ranch dressing.</p>
            </div>
          </div>
        </section>

        {/* Burgers */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Burgers</h2>
            <p className="text-tavern-silver/90 text-sm mt-1">All burgers served with fries. Substitute for onion rings, sweet potato fries, or tater tots +$2.</p>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Cowboy from Hell</h3>
                <span className="text-tavern-silver whitespace-nowrap">$16</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Bacon, cheddar, BBQ sauce, onion rings.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Intergalactic Burger</h3>
                <span className="text-tavern-silver whitespace-nowrap">$15</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Swiss cheese, sautéed mushrooms, caramelized onions.</p>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">The Headbanger</h3>
                <span className="text-tavern-silver whitespace-nowrap">$16</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">American cheese, bacon, lettuce, tomato, onion, special sauce.</p>
            </div>
          </div>
        </section>

        {/* Sandwiches and Dogs */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Sandwiches and Dogs</h2>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Classic Hot Dog</h3>
                <span className="text-tavern-silver whitespace-nowrap">$8</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">All beef hot dog with choice of toppings.</p>
            </div>
          </div>
        </section>

        {/* Backup Dancers (Sides) */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Backup Dancers (Sides)</h2>
          </div>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Fries</h3>
                <span className="text-tavern-silver whitespace-nowrap">$4</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Tater Tots</h3>
                <span className="text-tavern-silver whitespace-nowrap">$5</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Southern Style Potato Salad</h3>
                <span className="text-tavern-silver whitespace-nowrap">$4</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-slab text-base font-medium text-tavern-offwhite">Onion Rings</h3>
                <span className="text-tavern-silver whitespace-nowrap">$6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Taco Tuesday Specials */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Taco Tuesday Specials</h2>
          </div>
          <div className="space-y-5">
            <h3 className="font-display text-lg font-semibold text-tavern-silver/90">Appetizers</h3>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h4 className="font-slab text-base font-medium text-tavern-offwhite">Chips & Salsa</h4>
                <span className="text-tavern-silver whitespace-nowrap">$6</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-baseline gap-4">
                <h4 className="font-slab text-base font-medium text-tavern-offwhite">Nikki Stixx</h4>
                <span className="text-tavern-silver whitespace-nowrap">$11</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Fried mozzarella sticks with marinara.</p>
            </div>
            <h3 className="font-display text-lg font-semibold text-tavern-silver/90 mt-6">Tacos (individual)</h3>
            <div className="grid gap-3">
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Beef</span>
                <span className="text-tavern-silver">$3</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Chicken / Steak</span>
                <span className="text-tavern-silver">$4</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Fish</span>
                <span className="text-tavern-silver">$4</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Shrimp</span>
                <span className="text-tavern-silver">$4</span>
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold text-tavern-silver/90 mt-6">Quesadillas</h3>
            <div className="grid gap-3">
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Cheese</span>
                <span className="text-tavern-silver">$6</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Chicken</span>
                <span className="text-tavern-silver">$8.50</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="font-slab text-tavern-offwhite">Steak</span>
                <span className="text-tavern-silver">$9.50</span>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex justify-between items-baseline gap-4">
                <h4 className="font-slab text-base font-medium text-tavern-offwhite">Nachos</h4>
                <span className="text-tavern-silver whitespace-nowrap">$13</span>
              </div>
              <p className="text-tavern-silver/90 text-sm mt-1">Tortilla chips, cheese, pico de gallo, jalapeños, sour cream, guacamole. Choice of beef, chicken, or steak.</p>
            </div>
          </div>
        </section>

        {/* Jumbo Wings */}
        <section className="mb-12">
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Jumbo Wings</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-slab text-tavern-offwhite">6 Wings</span>
              <span className="text-tavern-silver">$10</span>
            </div>
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-slab text-tavern-offwhite">12 Wings</span>
              <span className="text-tavern-silver">$18</span>
            </div>
            <p className="text-tavern-silver/90 text-sm mt-2">Sauces: Buffalo, BBQ, Garlic Parmesan, Nashville Hot, Honey Sriracha</p>
          </div>
        </section>

        {/* Drink Specials */}
        <section>
          <div className="border-b border-tavern-gray pb-2 mb-6">
            <h2 className="font-display text-2xl font-semibold text-tavern-white">Drink Specials</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-slab text-tavern-offwhite">Draft Beer</span>
              <span className="text-tavern-silver">$5</span>
            </div>
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-slab text-tavern-offwhite">House Margarita</span>
              <span className="text-tavern-silver">$7</span>
            </div>
            <div className="flex justify-between items-baseline gap-4">
              <span className="font-slab text-tavern-offwhite">Shot Specials</span>
              <span className="text-tavern-silver">$5</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
