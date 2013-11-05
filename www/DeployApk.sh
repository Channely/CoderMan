#! /bin/sh
echo "\033[34m \033[05m Only for JT Frame on Android Platform. \033[0m"
package_name="com.moode.sms.client.coder.man"
main_activity_path="com.moode.sms.activity.MainActivity"
apk_name="CoderMan-debug.apk"
#packagename="org.sunshinelibrary.english"
gen
echo "\033[34m \033[05m gen OVER! \033[0m"
mdclean
echo "\033[34m \033[05m mdclean OVER! \033[0m"
mdbuild
echo "\033[34m \033[05m mdbuild OVER! \033[0m"
cd ..
cd app
echo "\033[34m \033[05m to /app OVER! \033[0m"
#adb clean
#adb uninstall $package_name
#echo '\033[34m \033[05m uninstall apk OVER! \033[0m'
ant debug
echo "\033[34m \033[05m ant debug OVER! \033[0m"
cd bin
#count=0
#for filename in `ls`
#do
#    count=$count+1
#    if [$count -eq 0+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1];then
#	fname=$filename
#    fi
#    echo $filename 
#done
adb install -r $apk_name
echo "\033[34m \033[05m install apk OVER! \033[0m"
adb shell am start -n $package_name/$main_activity_path
echo '\033[34m \033[05m Run app OVER! \033[0m'
cd ..
cd ..
cd www
echo "\033[34m \033[05m back to /www OVER! \033[0m"
echo "\033[34m \033[05m SUCCESS! CONTINUE...>>> \033[0m"
