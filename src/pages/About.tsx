
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Users, Eye, Target, Award, Mail, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [openBios, setOpenBios] = useState<Record<string, boolean>>({});

  const toggleBio = (memberName: string) => {
    setOpenBios(prev => ({
      ...prev,
      [memberName]: !prev[memberName]
    }));
  };

  const values = [
    {
      icon: Users,
      title: "Equity",
      description:
        "Ensuring fair opportunities and outcomes for all community members",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Promoting open and accountable practices in all our operations",
    },
    {
      icon: Target,
      title: "Participation",
      description:
        "Encouraging active community involvement in decision-making processes",
    },
    {
      icon: Award,
      title: "Sustainability",
      description:
        "Building long-term solutions for environmental and social challenges",
    },
  ];

  const advisoryBoardMembers = [
    {
      name: "Dominic Omboga",
      position: "Advisory Board Chairman",
      image: "/public/images/Dominic Omboga - Advisory Board Chairman.png",
      bio: ""
    },
    {
      name: "Amos Matagaro",
      position: "Executive Director & Founder",
      image: "/public/images/Sen. Amos Matagaro Ogwankwa - Executive Director.png",
      bio: `Amos Ogwankwa Matagaro is a distinguished youth leader, civic educator, and governance advocate with a deep commitment to youth empowerment, climate justice, and community-led development. He currently serves as the Executive Director and Founder of HatuaSasa Network, where he leads programs that promote civic participation, leadership training, and social transformation among young people across Kenya.

He holds the position of Youth Senator for Kisii County under the Youth Senate Kenya, where he champions policy and development frameworks that enhance youth inclusion in governance and economic advancement.

Amos is the recipient of a Certificate of Achievement from the United Nations Foundation, awarded for leading a youth action group that gained the most public support during the Big Brainstorm 2023. He also secured a climate advocacy grant from the National Democratic Institute (NDI) in 2024, and previously earned a prestigious leadership scholarship from the High Commission of India for executive training in New Delhi.

His professional development includes rigorous training through globally recognized institutions:
• Political Parties Leadership Institute, National Democratic Institute (2023–2024)
• International Training Programme on Developing Human Capabilities, NILRD, India (2022)
• Nairobi Summer School on Climate Justice, Kenyatta University (2023)
• Youth Leadership Academy, International Republican Institute (2021)

Amos has a rich leadership history, including service as Senior Personal Secretary in the Office of the Governor – Nyamira County (2020–2023), where he enhanced executive coordination and stakeholder management. He also served as Branch Secretary of the Amani National Congress (ANC) in Kisii County and was appointed to the National Youth Delegation at the 5th Devolution Conference (2018), where he contributed to youth policy discussions on national development.

Previously, he was the Chairperson of the Mugirango Youth Network and Development Association, where he mobilized student leaders and advanced community-focused initiatives. He also held key positions within student leadership, including Secretary General of the Kenyatta University Kisii County Students Association and Chairperson of the South Mugirango Constituency Students Association.

Amos continues to contribute through voluntary community service, including education advocacy, youth mentorship, and environmental action. He is widely respected for his inclusive leadership, commitment to impact, and dedication to creating opportunities for the next generation.`
    },
    {
      name: "Cherotich Rono",
      position: "Member",
      image: "/public/images/CPA. Wycliff Bichang  - Member.png",
      bio: `Cherotich Rono is an experienced program management specialist with a strong background in international affairs, focusing on democracy and governance, elections, inclusion programming, public finance management capacity building, institutional support and sub-grant management. She received legislative training from the Center for International Development at the State University of New York, during which she was attached to the Kenya National Assembly for one year. 

Benedictus has played a key role in developing leadership training curricula used to train political aspirants across two election cycles. She was instrumental in the formation of the caucus of Kenya Young Members of County Assemblies (KYMCA) and establishment of over 20 county-level caucuses to enhance youth participation in leadership. She also spearheaded the creation of Inter-Party Youth Forums (IPYF) in 12 counties, fostering dialogue and engagement between youth and governments. 

Benedictus has managed nationwide election agent training in collaboration with the Oslo Centre, the Office of the Registrar of Political Parties, and the Independent Electoral and Boundaries Commission, ensuring compliance with updated laws and procedures. Additionally, she contributed to the induction of women Members of County Assemblies, leading to the formation of women's caucuses and strengthening their legislative roles. 

She currently serves as the program lead overseeing NDI's fiscal transparency and accountability and youth programming in Kenya. In addition, she coordinates exchanges between the Kenya National Assembly and the U.S. House of Representatives through the House Democracy Partnership.`
    },
    {
      name: "Benson Simba",
      position: "Member",
      image: "/public/images/Mr. Benson Simba - Member.png",
      bio: ""
    },
  ];

  const secretariatMembers = [
    {
      name: "Nyabuto Hamphrey Okanga",
      position: "Senior Principal Program Officer",
      image: "/lovable-uploads/nyabuto-hamphrey.png",
      bio: `Nyabuto Hamphrey Okanga is a passionate Kenyan public health professional dedicated to climate justice through community-led solutions. He actively works to empower vulnerable communities to respond to climate related challenges. His grassroots approach, data-driven mindset, and commitment to sustainability align with HatuaSasa's mission to build citizen-led climate resilience. Nyabuto sees climate action not as a crisis, but as a powerful opportunity to transform lives and create lasting change from the ground up.`
    },
    {
      name: "Brian Achira Ongaga",
      position: "Head Of ICT Department",
      image: "/public/images/Mr. Benson Simba - Member.png", // Placeholder image
      bio: "Coming soon"
    },
  ];

  const renderTeamMember = (member: any, index: number) => (
    <Card
      key={index}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <CardContent className="p-6 text-center">
        <div className="mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-green-600 font-medium mb-4">
          {member.position}
        </p>
        
        {member.bio && (
          <Collapsible 
            open={openBios[member.name]} 
            onOpenChange={() => toggleBio(member.name)}
            className="mb-4"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mb-3 hover:bg-green-50 hover:border-green-300"
              >
                {openBios[member.name] ? "Hide Bio" : "Read Bio"}
                <ChevronDown 
                  className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                    openBios[member.name] ? "rotate-180" : ""
                  }`} 
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-left">
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {member.bio}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        <div className="flex justify-center space-x-3">
          <Button size="sm" variant="outline" className="p-2 hover:bg-green-50 hover:border-green-300">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="p-2 hover:bg-green-50 hover:border-green-300">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About HatuaSasa Network
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A grassroots organization dedicated to promoting sustainable
              development, accountable governance, and empowered communities in
              Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HatuaSasa Network is a grassroots, non-profit organization
                dedicated to promoting sustainable development, accountable
                governance, and empowered communities in Kenya. Our team is
                composed of passionate advocates, community educators, policy
                influencers, and young changemakers.
              </p>
              <p className="text-lg text-gray-600">
                We believe that meaningful change happens when communities are
                empowered with knowledge, resources, and the tools to advocate
                for themselves. Through our work, we bridge the gap between
                policy and practice, ensuring that the voices of ordinary
                citizens are heard and valued.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600">
                  A society where every individual is empowered, every voice is
                  heard, and every action matters toward a sustainable future.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600">
                  To promote climate justice, participatory governance, and
                  civic education through grassroots advocacy, policy
                  engagement, and community-based programs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">
              Experienced leaders guiding our strategic direction and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoardMembers.map((member, index) => renderTeamMember(member, index))}
          </div>
        </div>
      </section>

      {/* Secretariat Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Secretariat</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals driving our day-to-day operations and programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {secretariatMembers.map((member, index) => renderTeamMember(member, index))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our mission to create positive change in communities across
            Kenya through sustainable development and accountable governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Get Involved Today
            </Button>
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-gray-100 font-semibold"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
