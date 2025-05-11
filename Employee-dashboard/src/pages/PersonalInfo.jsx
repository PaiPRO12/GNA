import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, BriefcaseIcon, GraduationCapIcon, MapPinIcon } from 'lucide-react';

const PersonalInfoSection = ({ title, children }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const FormField = ({ label, children }) => (
  <div className="mb-4">
    <Label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</Label>
    {children}
  </div>
);

const PersonalInfo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.png" alt="Ignitious Sakala" />
            <AvatarFallback>IS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Ignitious Sakala</h1>
            <p className="text-gray-600">Senior Agricultural Specialist</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4 text-sm text-gray-600">
          <span className="flex items-center"><CalendarIcon className="mr-1 h-4 w-4" /> Joined: Jan 2020</span>
          <span className="flex items-center"><BriefcaseIcon className="mr-1 h-4 w-4" /> Department: Agronomy</span>
          <span className="flex items-center"><MapPinIcon className="mr-1 h-4 w-4" /> Location: Lusaka, Zambia</span>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="bg-white p-1 rounded-lg shadow-md">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <PersonalInfoSection title="Basic Information">
            <form className="grid grid-cols-2 gap-4">
              <FormField label="First Name">
                <Input id="first-name" defaultValue="Ignitious" />
              </FormField>
              <FormField label="Last Name">
                <Input id="last-name" defaultValue="Sakala" />
              </FormField>
              <FormField label="Date of Birth">
                <Input id="dob" type="date" defaultValue="1985-05-15" />
              </FormField>
              <FormField label="Gender">
                <Select defaultValue="male">
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Nationality">
                <Input id="nationality" defaultValue="Zambian" />
              </FormField>
              <FormField label="Marital Status">
                <Select defaultValue="married">
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
            </form>
          </PersonalInfoSection>
        </TabsContent>

        <TabsContent value="contact">
          <PersonalInfoSection title="Contact Details">
            <form className="space-y-4">
              <FormField label="Email">
                <Input id="email" type="email" defaultValue="ignitious.sakala@goodnatureagro.com" />
              </FormField>
              <FormField label="Phone">
                <Input id="phone" defaultValue="+260 97 1234567" />
              </FormField>
              <FormField label="Address">
                <Textarea id="address" defaultValue="123 Farming Road, Lusaka, Zambia" />
              </FormField>
            </form>
          </PersonalInfoSection>
        </TabsContent>

        <TabsContent value="employment">
          <PersonalInfoSection title="Employment Information">
            <form className="space-y-4">
              <FormField label="Current Position">
                <Input id="position" defaultValue="Senior Agricultural Specialist" />
              </FormField>
              <FormField label="Department">
                <Input id="department" defaultValue="Agronomy" />
              </FormField>
              <FormField label="Start Date">
                <Input id="start-date" type="date" defaultValue="2020-01-15" />
              </FormField>
              <FormField label="Employee ID">
                <Input id="employee-id" defaultValue="GNA2020015" />
              </FormField>
            </form>
          </PersonalInfoSection>
        </TabsContent>

        <TabsContent value="education">
          <PersonalInfoSection title="Education">
            <form className="space-y-4">
              <FormField label="Highest Degree">
                <Input id="degree" defaultValue="Master of Science in Agricultural Sciences" />
              </FormField>
              <FormField label="Institution">
                <Input id="institution" defaultValue="University of Zambia" />
              </FormField>
              <FormField label="Graduation Year">
                <Input id="graduation-year" type="number" defaultValue="2015" />
              </FormField>
            </form>
          </PersonalInfoSection>
        </TabsContent>

        <TabsContent value="emergency">
          <PersonalInfoSection title="Emergency Contact">
            <form className="space-y-4">
              <FormField label="Emergency Contact Name">
                <Input id="emergency-name" defaultValue="Chanda Sakala" />
              </FormField>
              <FormField label="Relationship">
                <Input id="emergency-relation" defaultValue="Spouse" />
              </FormField>
              <FormField label="Emergency Phone">
                <Input id="emergency-phone" defaultValue="+260 96 7654321" />
              </FormField>
            </form>
          </PersonalInfoSection>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <Button type="submit" className="w-full">Save Changes</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
