
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Users, Building, FileText, MapPin, Heart, Leaf, Award } from "lucide-react";

const Impact = () => {
  const stats = [
    { icon: TreePine, value: "10,000+", label: "Trees Planted", color: "text-green-600" },
    { icon: Users, value: "5,000+", label: "Citizens Trained on Civic Rights", color: "text-blue-600" },
    { icon: Building, value: "20+", label: "Governance Forums Conducted", color: "text-purple-600" },
    { icon: FileText, value: "12", label: "Policy Recommendations Delivered", color: "text-orange-600" },
    { icon: MapPin, value: "15", label: "Counties Engaged Across Kenya", color: "text-red-600" },
    { icon: Heart, value: "50+", label: "Community Leaders Trained", color: "text-pink-600" }
  ];

  const stories = [
    {
      title: "Climate Action in Kiambu County",
      description: "Through our tree planting initiatives, we've helped restore 500 acres of degraded land, providing both environmental benefits and income opportunities for local farmers.",
      impact: "500 acres restored",
      icon: Leaf
    },
    {
      title: "Youth Leadership in Nakuru",
      description: "Our civic education programs have empowered 200 young people to become community advocates, leading to improved local governance and accountability.",
      impact: "200 youth leaders",
      icon: Users
    },
    {
      title: "Women's Participation in Kisumu",
      description: "Our women's empowerment programs have increased female participation in local governance by 40%, ensuring more inclusive decision-making processes.",
      impact: "40% increase in participation",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Measuring the difference we make in communities across Kenya through our programs and initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Numbers That Matter</h2>
            <p className="text-xl text-gray-600">Quantifying our impact across Kenya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`${stat.color} mb-4`}>
                    <stat.icon className="h-16 w-16 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Change</h2>
            <p className="text-xl text-gray-600">Real impact from the communities we work with</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <story.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-green-800 font-semibold">{story.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Work</h2>
            <p className="text-xl text-gray-600">Our programs reach communities across 15 counties in Kenya</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-12">
            <div className="text-center">
              <MapPin className="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">15 Counties Engaged</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From Nairobi to Turkana, from Mombasa to Kakamega, our programs reach diverse communities 
                across Kenya, adapting to local needs while maintaining our core mission of empowerment, 
                climate action, and good governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices from the Ground</h2>
            <p className="text-xl text-gray-600">What community members say about our work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl text-green-600 mb-4">"</div>
                  <p className="text-lg text-gray-700 italic">
                    "HatuaSasa Network's civic education program opened my eyes to my rights as a citizen. 
                    Now I actively participate in county budget meetings and hold our leaders accountable."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mary Wanjiku</div>
                    <div className="text-gray-600">Community Leader, Kiambu</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-lg text-gray-700 italic">
                    "Through the tree planting program, our community not only improved our environment 
                    but also created new income opportunities. The training on sustainable farming has been invaluable."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">James Mwangi</div>
                    <div className="text-gray-600">Farmer, Nakuru County</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our vision for the next five years includes expanding our reach and deepening our impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25,000</div>
              <div className="text-lg">Trees to Plant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000</div>
              <div className="text-lg">Citizens to Train</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30</div>
              <div className="text-lg">Counties to Reach</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
