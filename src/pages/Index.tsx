
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TreePine, Users, Building, ArrowRight, Leaf, Heart, Shield, Globe } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: TreePine, value: "10,000+", label: "Trees Planted" },
    { icon: Users, value: "5,000+", label: "Citizens Trained" },
    { icon: Building, value: "20+", label: "Governance Forums" },
    { icon: Globe, value: "15", label: "Counties Engaged" }
  ];

  const programs = [
    {
      icon: Leaf,
      title: "Climate Change",
      description: "Promoting sustainable environmental practices and climate justice through community action.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Advocating for transparent, accountable, and inclusive governance systems.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Community Empowerment",
      description: "Equipping citizens with tools to shape their communities through education and training.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Citizens.<br />
              Protecting the Planet.<br />
              <span className="text-yellow-400">Strengthening Governance.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-gray-100">
              At HatuaSasa Network, we are driven by a bold vision — to build a just, equitable, and sustainable society for all. 
              We work at the intersection of climate action, good governance, and civic empowerment to create meaningful change in Kenya and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold">
                <Link to="/get-involved">Become a Partner</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Numbers That Matter</h2>
            <p className="text-xl text-gray-600">Our impact across Kenya speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Three core pillars driving meaningful change</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${program.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Button asChild variant="outline" className="group">
                    <Link to="/programs">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To promote climate justice, participatory governance, and civic education through grassroots advocacy, 
                policy engagement, and community-based programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Equity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Transparency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Participation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Sustainability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Integrity</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-24 w-24 text-green-600 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-800">Building a sustainable future together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Us in Creating Change</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you want to volunteer, partner with us, or support our mission financially, 
            there are many ways to get involved and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
