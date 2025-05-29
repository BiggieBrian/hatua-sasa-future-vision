import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with HatuaSasa Network. We'd love to hear from you
              and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      HatuaSasa Network
                      <br />
                      P.O. Box 12345
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">+254 xxx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600">info@hatuasasa.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <div className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-blue-700 hover:bg-blue-800 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                    <Youtube className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" className="w-full" />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      className="w-full h-32 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to receive email updates from HatuaSasa Network
                      </span>
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our office in Nairobi</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Our office location in Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can I volunteer with HatuaSasa Network?
                </h3>
                <p className="text-gray-600">
                  Visit our Get Involved page to see current volunteer
                  opportunities, or contact us directly to discuss how your
                  skills can contribute to our mission.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you work outside of Nairobi?
                </h3>
                <p className="text-gray-600">
                  Yes! We work across 15 counties in Kenya, adapting our
                  programs to meet local community needs while maintaining our
                  core mission.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can organizations partner with you?
                </h3>
                <p className="text-gray-600">
                  We welcome partnerships with NGOs, government agencies,
                  academic institutions, and private sector organizations.
                  Contact us to explore collaboration opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How are donations used?
                </h3>
                <p className="text-gray-600">
                  Donations directly support our programs in climate action,
                  governance, and community empowerment. We provide regular
                  updates on how funds are utilized.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait to make a difference. Join our community of changemakers
            today and help build a more sustainable and equitable future for
            Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Join Our Newsletter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-green-800"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
