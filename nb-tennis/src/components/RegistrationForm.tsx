import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "لطفاً نام خود را وارد کنید" }),
  lastName: z
    .string()
    .min(1, { message: "لطفاً نام خانوادگی خود را وارد کنید" }),
  phone: z.string().min(1, { message: "شماره تماس الزامی است" }),
  age: z.string().optional(),
  gender: z.string().optional(),
  tennisLevel: z.string().optional(),
  sportsHistory: z.string().optional(),
  tennisHistory: z.string().optional(),
  goal: z.string().optional(),
  illnessHistory: z.string().optional(),
  injuryHistory: z.string().optional(),
  medicalLimit: z.string().optional(),
  dominantHand: z.string().optional(),
  days: z
    .array(z.string())
    .min(1, { message: "حداقل یک روز برای کلاس انتخاب کنید" }),
  timeSlot: z.string().min(1, { message: "لطفاً ساعت مورد نظر را وارد کنید" }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const daysOfWeek = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      days: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    const message = `سلام وقت بخیر
    
درخواست ثبت‌نام کلاس تنیس

نام: ${data.firstName}
نام خانوادگی: ${data.lastName}
شماره تماس: ${data.phone}
سن: ${data.age || "وارد نشده"}
جنسیت: ${data.gender || "وارد نشده"}
سطح تنیس: ${data.tennisLevel || "وارد نشده"}
سابقه ورزشی: ${data.sportsHistory || "وارد نشده"}
سابقه تنیس: ${data.tennisHistory || "وارد نشده"}
هدف از کلاس: ${data.goal || "وارد نشده"}
سابقه بیماری: ${data.illnessHistory || "وارد نشده"}
سابقه آسیب بدنی: ${data.injuryHistory || "وارد نشده"}
محدودیت پزشکی: ${data.medicalLimit || "وارد نشده"}
دست غالب: ${data.dominantHand || "وارد نشده"}
روزهای پیشنهادی: ${data.days.join(" - ")}
ساعت‌های پیشنهادی: ${data.timeSlot}
توضیحات تکمیلی: ${data.notes || "وارد نشده"}`;

    const url =
      "https://wa.me/989112420129?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-tr-full -z-10"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">نام *</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="bg-gray-50 border-gray-200"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">نام خانوادگی *</Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="bg-gray-50 border-gray-200"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">شماره تماس *</Label>
            <Input
              id="phone"
              type="tel"
              dir="ltr"
              className="text-left bg-gray-50 border-gray-200"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">سن</Label>
            <Input
              id="age"
              type="number"
              dir="ltr"
              className="text-left bg-gray-50 border-gray-200"
              {...register("age")}
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="space-y-3">
            <Label>جنسیت</Label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="خانم" id="gender-female" />
                    <Label htmlFor="gender-female">خانم</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="آقا" id="gender-male" />
                    <Label htmlFor="gender-male">آقا</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>

          <div className="space-y-3 pt-2">
            <Label>دست غالب</Label>
            <Controller
              name="dominantHand"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="راست دست" id="hand-right" />
                    <Label htmlFor="hand-right">راست دست</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="چپ دست" id="hand-left" />
                    <Label htmlFor="hand-left">چپ دست</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <Label>سطح تنیس</Label>
            <Controller
              name="tennisLevel"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-gray-50 border-gray-200">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="بدون سابقه">بدون سابقه</SelectItem>
                    <SelectItem value="مبتدی">مبتدی</SelectItem>
                    <SelectItem value="متوسط">متوسط</SelectItem>
                    <SelectItem value="پیشرفته">پیشرفته</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label>هدف از شرکت در کلاس</Label>
            <Controller
              name="goal"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-gray-50 border-gray-200">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="یادگیری از صفر">
                      یادگیری از صفر
                    </SelectItem>
                    <SelectItem value="پیشرفت تکنیک">پیشرفت تکنیک</SelectItem>
                    <SelectItem value="آمادگی مسابقه">آمادگی مسابقه</SelectItem>
                    <SelectItem value="تناسب اندام">تناسب اندام</SelectItem>
                    <SelectItem value="تفریح و سلامتی">
                      تفریح و سلامتی
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sportsHistory">سابقه ورزشی</Label>
              <Input
                id="sportsHistory"
                {...register("sportsHistory")}
                className="bg-gray-50 border-gray-200"
                placeholder="مثال: ۲ سال والیبال"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tennisHistory">سابقه تنیس</Label>
              <Input
                id="tennisHistory"
                {...register("tennisHistory")}
                className="bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <Label htmlFor="illnessHistory">سابقه بیماری</Label>
            <Input
              id="illnessHistory"
              {...register("illnessHistory")}
              className="bg-gray-50 border-gray-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="injuryHistory">سابقه آسیب بدنی</Label>
            <Input
              id="injuryHistory"
              {...register("injuryHistory")}
              className="bg-gray-50 border-gray-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalLimit">محدودیت پزشکی یا حرکتی</Label>
            <Input
              id="medicalLimit"
              {...register("medicalLimit")}
              className="bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-6 pt-4 border-t border-gray-100 bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50">
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              روزهای مورد نظر برای کلاس *
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Controller
                name="days"
                control={control}
                render={({ field }) => (
                  <>
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="flex items-center space-x-2 space-x-reverse bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <Checkbox
                          id={`day-${day}`}
                          checked={field.value?.includes(day)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), day]
                              : field.value?.filter((d: string) => d !== day);
                            field.onChange(newValue);
                          }}
                        />
                        <Label htmlFor={`day-${day}`} className="font-medium">
                          {day}
                        </Label>
                      </div>
                    ))}
                  </>
                )}
              />
            </div>
            {errors.days && (
              <p className="text-red-500 text-sm mt-1">{errors.days.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeSlot" className="text-base font-semibold">
              ساعت‌های مورد نظر برای کلاس *
            </Label>
            <Input
              id="timeSlot"
              {...register("timeSlot")}
              className="bg-white border-gray-200 h-12"
              placeholder="مثال: شنبه و دوشنبه ساعت ۱۸ تا ۲۰"
            />
            {errors.timeSlot && (
              <p className="text-red-500 text-sm mt-1">
                {errors.timeSlot.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <Label htmlFor="notes">توضیحات تکمیلی</Label>
          <Textarea
            id="notes"
            {...register("notes")}
            className="bg-gray-50 border-gray-200 min-h-[100px]"
            placeholder="هر توضیحی که مربی باید بداند..."
          />
        </div>

        <div className="pt-6">
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg font-semibold h-14 rounded-xl gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1"
          >
            <FaWhatsapp className="w-6 h-6" />
            ارسال اطلاعات به واتساپ مربی
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            پس از کلیک، اطلاعات در واتساپ به مربی ارسال می‌شود.
          </p>
        </div>
      </form>
    </div>
  );
}
