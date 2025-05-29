
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Handshake, Heart, Mail, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our mission on the ground. Whether you're a student, activist, or professional — your time can make a difference.",
      activities: ["Community workshops", "Tree planting events", "Civic education sessions", "Data collection"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "We work with civil society groups, government bodies, academic institutions, and private sector partners.",
      activities: ["Joint programs", "Resource sharing", "Policy advocacy", "Research collaboration"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our programs and help us reach more communities. Every contribution counts toward a stronger future.",
      activities: ["Program funding", "Equipment support", "Training materials", "Community projects"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const volunteerRoles = [
    {
      title: "Community Educator",
      time: "10-15 hours/month",
      location: "Various counties",
      description: "Facilitate civic education workshops and community dialogues"
    },
    {
      title: "Environmental Advocate",
      time: "8-12 hours/month", 
      location: "Field locations",
      description: "Support tree planting campaigns and environmental awareness programs"
    },
    {
      title: "Research Assistant",
      time: "5-10 hours/week",
      location: "Remote/Office",
      description: "Help with policy research, data analysis, and report writing"
    },
    {
      title: "Youth Mentor",
      time: "6-8 hours/month",
      location: "Community centers",
      description: "Guide and support young leaders in their development journey"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our movement for climate action, good governance, and community empowerment. 
              There are many ways to make a difference with HatuaSasa Network.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600">Choose how you'd like to contribute to positive change</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${opportunity.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What you can do:</h4>
                    <ul className="space-y-2">
                      {opportunity.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Specific roles where we need your help right now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{role.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in the power of collaboration. We work with diverse partners to amplify our impact 
                and create sustainable change across Kenya.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Civil Society Organizations</h4>
                    <p className="text-gray-600">Joint advocacy and program implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Government Bodies</h4>
                    <p className="text-gray-600">Policy dialogue and capacity building</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Institutions</h4>
                    <p className="text-gray-600">Research collaboration and knowledge sharing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Private Sector</h4>
                    <p className="text-gray-600">Corporate social responsibility partnerships</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link to="/contact">Discuss Partnership</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Handshake className="h-32 w-32 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Stay Informed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-600">Subscribe to our newsletter and follow us on social media</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Mail className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Newsletter Signup</h3>
                  <p className="text-gray-600">Get updates on our programs, events, and impact stories</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of Kenyans who are already part of the HatuaSasa Network community. 
            Together, we can build a more just, equitable, and sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
