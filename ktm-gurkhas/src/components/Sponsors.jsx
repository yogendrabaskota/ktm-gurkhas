import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaStar,
  FaCrown,
  //   FaShield,
  FaRocket,
  FaAward,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import { FaShield } from "react-icons/fa6";
const Sponsors = () => {
  // Sponsorship tiers
  const sponsorshipTiers = [
    {
      name: "Title Sponsor",
      level: "Platinum",
      icon: FaCrown,
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-400",
      description:
        "Maximum brand visibility and exclusive partnership benefits",
      benefits: [
        "Logo on team jerseys (chest)",
        "Naming rights for home matches",
        "Exclusive interview opportunities",
        "VIP hospitality for all matches",
        "Digital media prominence",
        "Player appearances",
      ],
      investment: "$50,000+",
      spots: "1 available",
    },
    {
      name: "Official Partner",
      level: "Gold",
      icon: FaStar,
      color: "from-yellow-300 to-gold-500",
      borderColor: "border-yellow-300",
      description: "High-impact partnership with extensive brand exposure",
      benefits: [
        "Logo on team jerseys (sleeve)",
        "Stadium branding",
        "Social media features",
        "Matchday hospitality",
        "Website features",
        "Newsletter mentions",
      ],
      investment: "$25,000 - $49,999",
      spots: "3 available",
    },
    {
      name: "Associate Sponsor",
      level: "Silver",
      icon: FaShield,
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400",
      description: "Strategic partnership with targeted visibility",
      benefits: [
        "Logo on practice kits",
        "Digital banner ads",
        "Social media mentions",
        "Program advertising",
        "Press conference branding",
        "Player meet & greets",
      ],
      investment: "$10,000 - $24,999",
      spots: "5 available",
    },
    {
      name: "Community Partner",
      level: "Bronze",
      icon: FaUsers,
      color: "from-orange-400 to-orange-600",
      borderColor: "border-orange-400",
      description: "Local engagement and community-focused partnership",
      benefits: [
        "Website listing",
        "Social media recognition",
        "Community event presence",
        "Program mentions",
        "Newsletter features",
        "Matchday recognition",
      ],
      investment: "$5,000 - $9,999",
      spots: "Unlimited",
    },
  ];

  // Current sponsors
  const currentSponsors = [
    {
      name: "Himalayan Bank",
      tier: "Title Sponsor",
      logo: "/sponsors/himalayan-bank.png",
      since: "2022",
      category: "Financial Services",
      description:
        "Official banking partner supporting youth development programs",
    },
    {
      name: "Yeti Airlines",
      tier: "Official Partner",
      logo: "/sponsors/yeti-airlines.png",
      since: "2021",
      category: "Aviation",
      description: "Official travel partner ensuring smooth team logistics",
    },
    {
      name: "CG Foods",
      tier: "Official Partner",
      logo: "/sponsors/cg-foods.png",
      since: "2020",
      category: "Food & Beverage",
      description: "Nutrition partner providing quality food products",
    },
    {
      name: "Nepal Telecom",
      tier: "Associate Sponsor",
      logo: "/sponsors/ntc.png",
      since: "2023",
      category: "Telecommunications",
      description: "Digital connectivity partner enhancing fan engagement",
    },
    {
      name: "Daraz",
      tier: "Associate Sponsor",
      logo: "/sponsors/daraz.png",
      since: "2022",
      category: "E-commerce",
      description: "Official e-commerce partner for merchandise sales",
    },
    {
      name: "Bajaj Auto",
      tier: "Community Partner",
      logo: "/sponsors/bajaj.png",
      since: "2023",
      category: "Automotive",
      description: "Supporting local community cricket initiatives",
    },
  ];

  // Partnership benefits
  const partnershipBenefits = [
    {
      icon: FaChartLine,
      title: "Brand Exposure",
      description:
        "Reach millions of cricket fans through various media channels",
    },
    {
      icon: FaUsers,
      title: "Fan Engagement",
      description: "Connect with passionate cricket enthusiasts across Nepal",
    },
    {
      icon: FaRocket,
      title: "Business Growth",
      description:
        "Leverage sports marketing to drive your business objectives",
    },
    {
      icon: FaAward,
      title: "CSR Opportunities",
      description: "Support youth development and community sports programs",
    },
  ];

  // Success stories
  const successStories = [
    {
      sponsor: "Himalayan Bank",
      achievement: "35% increase in brand recall among cricket fans",
      quote:
        "Partnering with Kathmandu Gurkhas has been transformative for our brand visibility and community engagement.",
    },
    {
      sponsor: "CG Foods",
      achievement: "Record merchandise sales through co-branded products",
      quote:
        "The Gurkhas partnership helped us connect with younger demographics across Nepal.",
    },
  ];

  return (
    <section id="sponsors">
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAwMTVNNDUgMzBMMzAgNDVMMzAwMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border-2 border-yellow-300 bg-black flex items-center justify-center">
                <FaHandshake className="w-10 h-10 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              <span className="block text-yellow-300">PARTNERS &</span>
              <span className="block text-gold-500 mt-2">SPONSORS</span>
            </h1>
            <p className="mt-4 text-xl text-yellow-100 max-w-2xl mx-auto">
              Join our winning team and become part of the Gurkhas legacy
            </p>
          </div>

          {/* Current Sponsors Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Our Valued Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center hover:border-yellow-400 transition duration-300 group"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center p-4 group-hover:scale-105 transition duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {sponsor.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-yellow-300 text-black text-sm font-bold rounded-full mb-3">
                    {sponsor.tier}
                  </span>
                  <p className="text-yellow-100 text-sm mb-2">
                    {sponsor.category}
                  </p>
                  <p className="text-yellow-200 text-xs mb-3">
                    Partner since {sponsor.since}
                  </p>
                  <p className="text-yellow-100 text-sm">
                    {sponsor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 text-center hover:border-yellow-400 transition duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-yellow-300" />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-yellow-100 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Sponsorship Opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-black bg-opacity-50 border ${tier.borderColor} border-opacity-30 rounded-lg p-6 hover:scale-105 transition duration-300 relative overflow-hidden`}
                >
                  {/* Tier Badge */}
                  <div
                    className={`absolute top-0 right-0 bg-gradient-to-r ${tier.color} text-white px-4 py-1 text-sm font-bold rounded-bl-lg`}
                  >
                    {tier.level}
                  </div>

                  <div className="flex items-center mb-4">
                    <tier.icon className="w-8 h-8 text-yellow-300 mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="text-yellow-100 text-sm mb-4">
                    {tier.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">
                      Benefits:
                    </h4>
                    <ul className="text-yellow-100 text-sm space-y-1">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaStar className="w-3 h-3 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-yellow-300 border-opacity-20 pt-4 mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-yellow-300 font-bold">
                        {tier.investment}
                      </span>
                      <span className="text-yellow-100">{tier.spots}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className=" bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-6 hover:border-yellow-400 transition duration-300"
                >
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    {story.sponsor}
                  </h3>
                  <div className="bg-yellow-300 bg-opacity-10 border border-yellow-300 border-opacity-20 rounded-lg p-4 mb-4">
                    <p className="text-black font-semibold">
                      {story.achievement}
                    </p>
                  </div>
                  <blockquote className="text-yellow-100 italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-black bg-opacity-50 border border-yellow-300 border-opacity-30 rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
              READY TO JOIN THE GURKHAS FAMILY?
            </h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Partner with us and leverage the power of cricket to achieve your
              marketing objectives while supporting sports development in Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
              >
                Become a Partner
                <FaHandshake className="ml-2 -mr-1 w-5 h-5" />
              </Link>
              <a
                href="/media-kit.pdf"
                className="inline-flex items-center justify-center px-8 py-3 border border-yellow-300 text-base font-medium rounded-md text-yellow-300 hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
              >
                Download Media Kit
                <FaChartLine className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                500K+
              </div>
              <div className="text-yellow-100">Social Media Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">85%</div>
              <div className="text-yellow-100">Brand Recall Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                2.5M+
              </div>
              <div className="text-yellow-100">Annual Media Impressions</div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-yellow-200 animate-pulse opacity-70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Sponsors;
