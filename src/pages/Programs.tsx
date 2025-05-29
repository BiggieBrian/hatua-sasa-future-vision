
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Shield, Heart, TreePine, Users, Building, Lightbulb, BookOpen, Award } from "lucide-react";

const Programs = () => {
  const climatePrograms = [
    { icon: TreePine, title: "Tree Planting Campaigns", description: "Community-led initiatives to restore forests and combat deforestation" },
    { icon: Lightbulb, title: "Climate Education", description: "Workshops on climate change impacts and sustainable practices" },
    { icon: Users, title: "Youth Green Innovations", description: "Supporting young entrepreneurs in developing climate solutions" }
  ];

  const governancePrograms = [
    { icon: Building, title: "Civic Engagement Campaigns", description: "Mobilizing citizens to participate in democratic processes" },
    { icon: Award, title: "Community Scorecards", description: "Tools for communities to assess government performance" },
    { icon: Users, title: "Participatory Budgeting", description: "Involving citizens in budget allocation decisions" }
  ];

  const empowermentPrograms = [
    { icon: BookOpen, title: "Civic Education Workshops", description: "Teaching citizens their rights and responsibilities" },
    { icon: Users, title: "Leadership Training", description: "Developing local leaders and advocates" },
    { icon: Heart, title: "Women's Rights Programs", description: "Promoting gender equality and women's participation" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive initiatives across three core areas: Climate Change, Governance, and Community Empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Climate Change Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Climate Change</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are deeply committed to advocating for climate action and justice. 
              We believe that those most affected by climate change must have a seat at the table in shaping climate solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {climatePrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <program.icon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Promote sustainable environmental practices</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Engage communities in tree planting and clean-up campaigns</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Educate the public on climate change impacts and mitigation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Advocate for inclusive and effective climate policies</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Support youth-led green initiatives and innovations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Governance Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Governance</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We advocate for transparent, accountable, and inclusive governance systems. 
              Through our work, we aim to ensure that governance works for the people it serves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {governancePrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <program.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Governance Initiatives Include:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Civic engagement campaigns</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Policy reform advocacy at local and county levels</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Capacity-building for government officials and citizens</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Community scorecards and social audits</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Public forums and participatory budgeting initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community Empowerment Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Empowerment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Empowering people is at the heart of our mission. We equip citizens with the tools they need to shape their communities. 
              We believe informed citizens are powerful agents of change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {empowermentPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <program.icon className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Empower Communities:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Civic education workshops</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Leadership and advocacy training</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Rights and responsibilities awareness sessions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Youth empowerment and mentorship</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Women's rights and inclusion programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved in Our Programs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in making a difference through our comprehensive programs across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/get-involved">Volunteer</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
