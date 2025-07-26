'use client';
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2Icon, CircleUserIcon} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const  [lang,setlang] = useState<string>('en'); 
  const [user, setUser] = useState({  
  firstName: '',
  lastName: '',
  email: ''
});
const router = useRouter()
  useEffect(() => {
        const email = localStorage.getItem("email");
        setUser({
          firstName: email?.split('@')[0] || "User",
          lastName: '',
          email: email || ''
        });

      }, []);

const [isSuccess, setIsSuccess] = useState(false);

const handlerLogout = () =>{
  localStorage.removeItem('email')
  router.push('/login')
}

function ImageUploadPreview() {
// Handle file selection
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  }, []);

  // Remove selected file
  const removeFile = () => {
    if (preview) URL.revokeObjectURL(preview); // Clean up memory
    setFile(null);
    setPreview(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg", ".webp"] },
    maxFiles: 1,
  });

  return (
    <Card className={`max-w-md md:my-4 my-2 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <CardContent className="p-4">
        {!preview ? (
          <div
            {...getRootProps()}
            className="flex flex-col w-full justify-center items-center p-8 cursor-pointer"
          >
            <input {...getInputProps()} />
            <CircleUserIcon className={`w-24 h-24 mb-4 ${isDark ? 'text-gray-500' : 'text-primary'}`} />
            <Button type="button" variant="outline" className="mt-2">
              {lang === 'en' ? 'Upload Profile Picture' : 'Unggah Foto Profil'}
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              PNG, JPG, JPEG, WEBP (max 5MB)
            </p>
          </div>
        ) : (
          <div className="relative">
            <img
              src={preview}
              alt="Profile preview"
              className="w-64 h-64 object-cover rounded-3xl mx-auto"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-white/90 hover:bg-white"
              onClick={removeFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
      
      {file && (
        <CardFooter className="flex justify-center p-4 border-t">
          <Button 
            variant="outline" 
            onClick={removeFile} 
            className={`w-full ${isDark ? 'bg-gray-400 text-black' : 'bg-white  text-black'}`}
          >
            {lang === 'en' ? 'Change Picture' : 'Ubah Gambar'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}


  return (
    <>
  {/* Success Alert */}
  {isSuccess && (
    <Alert className="fixed top-4 right-4 w-96 z-50">
      <CheckCircle2Icon color="#2fd1c8" />
      <AlertTitle className="text-primary text-md">{lang === 'en' ? 'Success!' : 'Sukses!'}</AlertTitle>
      <AlertDescription className="text-gray-400 font-bold text-sm">
        {lang === 'en' ? 'Profile updated successfully!' : 'Profil berhasil diperbarui!'}
      </AlertDescription>
    </Alert>
  )}

  {/* Profile Container */}
  <div className={`flex-1 ${isDark ? 'bg-gray-800' : 'bg-white'} flex flex-col items-center px-4 md:px-8 py-6 gap-6  mx-auto`}>
    {/* Header Section */}
    <div className="w-full text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-primary">{lang === 'en' ? 'Profile Settings' : 'Pengaturan Profil'}</h1>
      <p className="text-sm md:text-md text-gray-400 mt-2">
        {lang === 'en' ? 'Manage your profile information and settings' : 'Kelola informasi dan pengaturan profil Anda'}
      </p>
    </div>

    {/* Profile Card */}
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column - Profile Picture */}
      <div className="md:col-span-1 flex flex-col items-center">
        <ImageUploadPreview />
        <Button variant="outline" className="mt-4 w-full">
          {lang === 'en' ? 'Change Profile Picture' : 'Ubah Foto Profil'}
        </Button>
      </div>

      {/* Right Column - Form */}
      <div className="md:col-span-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-400">
             {lang === 'en' ? 'First Name' : 'Nama Depan'}
            </Label>
            <Input
            className={`${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              id="firstName"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-gray-400">
              {lang === 'en' ? 'Last Name' : 'Nama Belakang'}
            </Label>
            <Input
              id="lastName"
              className={`${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-400">
            Email
          </Label>
          <Input
          className={`${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="bio" className="text-gray-400">
            Bio
          </Label>
          <Input
            multiple
            id="bio"
            placeholder={lang === 'en' ? 'Tell us about yourself...' : 'Ceritakan tentang diri Anda...'}
            className={`min-h-[100px] ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            className={`bg-primary hover:bg-primary/90 flex-1 ${isDark ? 'text-black': 'text-white'}`}

            onClick={() => {
              setIsSuccess(true);
              setTimeout(() => setIsSuccess(false), 3000);
            }}
            disabled={!user.firstName || !user.email}
          >
            {lang === 'en' ? 'Save Changes' : 'Simpan Perubahan'}
          </Button>
          <Button variant="outline" className="flex-1">
            {lang === 'en' ? 'Cancel' : 'Batalkan'}
          </Button>
        </div>
      </div>
    </div>

    {/* Additional Sections */}
    <div className="w-full space-y-6 mt-8">
      {/* Account Settings */}
      <div className="border rounded-lg p-4">
        <h2 className={`font-semibold text-lg mb-4 ${isDark ? 'text-white' : 'text-black' }`}>{lang === 'en' ? 'Account Settings' : 'Pengaturan Akun'}</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className={`text-gray-600 ${isDark ? 'text-white' : 'text-gray-600'}`}>
              {lang === 'en' ? 'Language Preference' : 'Preferensi Bahasa'}</span>
            <Select value={lang} onValueChange={setlang} >
              <SelectTrigger className={`text-gray-600 ${isDark ? 'text-white' : 'text-gray-600'} w-[180px]`}>
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en" >English</SelectItem>
                <SelectItem value="id">Bahasa Indonesia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-gray-600 ${isDark ? 'text-white' : 'text-gray-600'}`}>{lang === 'en' ? 'Dark Mode' : 'Mode Gelap'}</span>
            
            <Switch 
        checked={isDark} 
        onCheckedChange={setIsDark} 
      />
          </div>
          <div className="flex justify-between items-center">
            <Button className="w-full bg-red-600 text-white text-md"
            onClick={handlerLogout}
            >{lang ==='en' ? 'Log Out' : 'Keluar' }</Button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border border-red-100 rounded-lg p-4 bg-red-50">
        <h2 className="font-semibold text-lg mb-4 text-red-600">{lang === 'en' ? 'Danger Zone' : 'Zona Berbahaya'}</h2>
        <div className="flex flex-col space-y-3">
          <Button variant="destructive" className="w-full md:w-auto">
            {lang === 'en' ? 'Delete Account' : 'Hapus Akun'}
          </Button>
          <p className="text-sm text-red-500">
           {lang === 'en' ? 'This action cannot be undone.' : 'Tindakan ini tidak dapat dibatalkan.'}
          </p>
        </div>
      </div>
    </div>
  </div>
</>
  );
}       
export default Profile; 