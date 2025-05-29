
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Eye, Target, Award, Mail, Linkedin } from "lucide-react";

const About = () => {
  const values = [
    { icon: Users, title: "Equity", description: "Ensuring fair opportunities and outcomes for all community members" },
    { icon: Eye, title: "Transparency", description: "Promoting open and accountable practices in all our operations" },
    { icon: Target, title: "Participation", description: "Encouraging active community involvement in decision-making processes" },
    { icon: Award, title: "Sustainability", description: "Building long-term solutions for environmental and social challenges" }
  ];

  const teamMembers = [
    {
      name: "Team Member 1",
      position: "Position Title",
      image: "/lovable-uploads/cf966e55-6cc4-4b4d-bf4e-ff4f1e226a9e.png"
    },
    {
      name: "Team Member 2", 
      position: "Position Title",
      image: "/lovable-uploads/e6f5e001-f219-4384-a57e-4690b942bbde.png"
    },
    {
      name: "Team Member 3",
      position: "Position Title", 
      image: "/lovable-uploads/5b4ec25b-4d0b-4419-b7ee-d56c1705369e.png"
    },
    {
      name: "Team Member 4",
      position: "Position Title",
      image: "/lovable-uploads/575441de-957c-493f-80fc-08b125e49600.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About HatuaSasa Network</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A grassroots organization dedicated to promoting sustainable development, 
              accountable governance, and empowered communities in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                HatuaSasa Network is a grassroots, non-profit organization dedicated to promoting sustainable development, 
                accountable governance, and empowered communities in Kenya. Our team is composed of passionate advocates, 
                community educators, policy influencers, and young changemakers.
              </p>
              <p className="text-lg text-gray-600">
                We believe that meaningful change happens when communities are empowered with knowledge, 
                resources, and the tools to advocate for themselves. Through our work, we bridge the gap 
                between policy and practice, ensuring that the voices of ordinary citizens are heard and valued.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <Users className="h-32 w-32 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  A society where every individual is empowered, every voice is heard, 
                  and every action matters toward a sustainable future.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  To promote climate justice, participatory governance, and civic education 
                  through grassroots advocacy, policy engagement, and community-based programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate advocates, community educators, policy influencers, and young changemakers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.position}</p>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our mission to create positive change in communities across Kenya through 
            sustainable development and accountable governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Get Involved Today
            </Button>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
