const popularItems = {
  topCenter: {
    description:
      "Try our popular French Toast! Fresh baked bread, dipped in egg and smothered in maple syrup. Who doesn't like an excuse to have breakfast for dinner?",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80",
  },
  topRight: {
    description:
      "A delicious and nutritious egg sandwich made with a fresh egg, ham, and cheddar on a toasted bagel or English biscuit. A protein filled meal to start your day off right!",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
  },
  left: {
    description:
      "We offer many types of bread, but one of our most popular options is our Focaccia bread! We carry several options and whatever one you choose we are certain that you will enjoy it just as much as we do!",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1200&q=80",
  },
  center: {
    description:
      "Pastel de Nata’s are a European delicacy! These consist of a Portuguese egg custard in a flaky pastry and dusted with cinnamon. These can be a decadent breakfast item, or enjoyed with your afternoon coffee.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
  },
  right: {
    description:
      "Whatever the explanation, waffles are an incredible decision for a riotous week. They work for breakfast, lunch, or supper. Even toss in some fresh fruit and a little whipped cream! They can even turn into a great dessert!",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80",
  },
};

function ImageCard({ item, imageClassName = "", className = "" }) {
  return (
    <article
      className={`group transition-all duration-300 ease-out hover:scale-[1.08]  ${className}`}
    >
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
        <img
          src={item.image}
          alt="food"
          className={`w-full rounded-[28px] object-cover brightness-[0.92] contrast-[1.05] ${imageClassName}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
      </div>
    </article>
  );
}

function TextBlock({ item, className = "" }) {
  return (
    <div className={`text-[#f8f4ee] ${className}`}>
      <p className="text-[15px] mb-2 leading-7 text-white/85 tracking-[0.02em]">
        {item.description}
      </p>
    </div>
  );
}

export default function PopularItems() {
  return (
    <section className="bg-[#291911] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24" data-aos="fade-up">
      <div className="mx-auto max-w-6xl ">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch lg:gap-x-16 lg:gap-y-18">
          
          {/* Heading */}
          <div className="flex flex-col justify-start pt-0 md:pt-20" data-aos="fade-down" data-aos-delay="200">
            <p className="text-[18px] uppercase tracking-[0.25em] text-white/70">
              Some Of
            </p>
            <h2
              className="mt-4 text-5xl leading-[1.1] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Indie Flower", cursive' }}
            >
              Our Popular
              <br />
              Items
            </h2>
            <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-white to-transparent" />
          </div>

          {/* Top Center */}
          <div className="w-[330px] flex flex-col" data-aos="fade-up" data-aos-delay="400">
            <ImageCard
              item={popularItems.topCenter}
              imageClassName="h-[300px] sm:h-[400px] lg:h-[400px]"
            />
            <TextBlock item={popularItems.topCenter} className="mt-4" />
            <button className=" w-1/2 px-6 py-2 mb-5 bg-[#d99145] text-white rounded-full font-medium hover:bg-gray-100 hover:text-black transition-colors">Shop Now</button>
          </div>

          {/* Top Right */}
          <div className="w-[330px] flex flex-col  justify-between" data-aos="fade-up" data-aos-delay="500">
            <TextBlock item={popularItems.topRight} />
            <button className=" w-1/2 px-6 py-2 mb-5 bg-[#d99145] text-white rounded-full font-medium hover:bg-gray-100 hover:text-black transition-colors">Shop Now</button>
            <ImageCard
              item={popularItems.topRight}
              imageClassName=" h-[300px]  sm:h-[400px] lg:h-[400px]"
            />
          </div>

          {/* Left */}
          <div className="w-[330px] order-5 lg:order-none flex flex-col" data-aos="fade-up" data-aos-delay="600">
            <TextBlock item={popularItems.left} />
            <button className=" w-1/2 px-6 py-2 mb-5 bg-[#d99145] text-white rounded-full font-medium hover:bg-gray-100 hover:text-black transition-colors">Shop Now</button>
            <ImageCard
              item={popularItems.left}
              imageClassName=" h-[300px] sm:h-[400px] lg:h-[400px]"
            />
          </div>

          {/* Center */}
          <div className="w-[330px] order-4 lg:order-none flex flex-col" data-aos="fade-up" data-aos-delay="700">
            <ImageCard
              item={popularItems.center}
              imageClassName="h-[300px] sm:h-[400px] lg:h-[400px]"
            />
            <TextBlock item={popularItems.center} className="mt-4" />
            <button className=" w-1/2 mb-5 px-6 py-2 bg-[#d99145] text-white rounded-full font-medium hover:bg-gray-100 hover:text-black transition-colors">Shop Now</button>
          </div>

          {/* Right */}
          <div className="w-[330px] order-6 lg:order-none flex flex-col" data-aos="fade-up" data-aos-delay="800">
            <TextBlock item={popularItems.right} />
            <button className=" w-1/2 mb-5 px-6 py-2 bg-[#d99145] text-white rounded-full font-medium hover:bg-gray-100 hover:text-black transition-colors">Shop Now</button>
            <ImageCard
              item={popularItems.right}
              imageClassName=" h-[300px] sm:h-[400px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}