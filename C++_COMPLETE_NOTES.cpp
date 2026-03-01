                                                               C++
 Fast , Video Editting , Middle Level , Used for creating video games
 high Level = Human readable  Low Level= Machine Readable   c++ Middle Leveld
 EXTENSION (.cpp) OBJECT ORIENTED PROGRAMMNG
 Download all the Extension (C++/C  runner , .coderunenr) and in Vs code website MinGW dowmload Compiler  OR  use codeblocks ✅ (More preferred)
C++ offers a vast range of libraries and tools, such as the Standard Template Library (STL)

 https://youtu.be/z2jDamkbBF0?si=jBpAcgaw3asPojT5  (WATCH HOW TO RUN C/C++ IN SYSTEM  )
https://www.youtube.com/watch?v=vLnPwxZdW4Y  ( C++ BASICS NEDED )

🔴🟡🟢 OUTPUT
->  g++ filename.cpp -o filename  -> Compiler
->./filename                      -> output

  ⚫⚫⚪⚪ : codeblocks : code editor best for c/c++ dsa
                          
//------------------------------------------------------------------------------------------------------------------------o----------------------------------------------------
                                                                      BASIC CODE
#include <iostream> //INPUT - OUTPUT STREAM
int main(){
    std::cout << "Hello, World!"  ;  // standard Character Output
    std::cout <<"Hello World AS" << std::endl; // << std::endl; acts like full stop and adds next text to next line (Flushes the output buffer)
    std::cout <<"ARYAN SURYA S" << std::endl;
    // This (//) is single line comment
    /* This
     is
         a
          multi-line
         comment */
  int a=10;
int d=20;
int q=a+d;

std::cout <<a << '\n';   //10
std::cout <<d << '\n';  //20
std::cout <<q << '\n'; //30
    return 0;
 }

  TAKING INPUT AND PRINTING

     int number;
     std::cin >> number;
//-----------------------------------------------------------------------  VARIABLES  --------------------------------------------------------------------------------------------
 #include <iostream>
 int main(){     
   int a=10;
   double d=9.12;
   char grade = 'A';
   char initial = '$';
   bool isAdult = true;
   std::string name = "John Doe";
   std::string day="tuesday";
   
std::cout <<a << '\n';
std::cout <<d << '\n';
std::cout <<grade << '\n';
std::cout <<initial << '\n';
std::cout <<isAdult << '\n';
std::cout <<name << '\n';
std::cout << day << '\n';
std::cout << "HEllo " << name << "My Age is " <<a << "And my CGPA is " << d << '\n';
    return 0;
 }

 //int : 4 bytes whole number (1,2,3,55,44,999,1000,10,1,-20)
 //double : 8 bytes decimal number (1.5,2.3,3.14,44.99,100.001,-20.55)
 //char : 1 byte single character ('A','B','C','D','a','b','c','d','1','2','3','@','#','$') use ' ' single Quote to represent character
 //bool : 1 byte true or false (true, false) (1,0)
 //string : varies multiple characters ("Hello","John Doe","Tuesday","$1000") use " " double Quote to represent string
 //float : 4 bytes decimal number (1.5,2.3,3.14,44.99,100.001,-20.55) less precise than double
 //long : 8 bytes whole number (1,2,3,55,44,999,1000,10,1,-20) larger range than int
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

#include <iostream> // Header for
// Without using namespace std;
int main() {
std::cout << "Hello, World!" <<<<
return 0;
}

// With using namespace std;
#include <iostream>
using namespace std; // Brings ever
int main() {
cout << "Hello, World!" << endl;
return 0;
}
  USING THE CONSTANT KEYWORDI N THE CODE IN ORDER TO NOT US ETHE STD::
//------------------------------------------------------------------------ const Keyword  ------------------------------------------------------------------------------------------------

 #include <iostream>
 int main(){     
 // const keyword used with variables it cant be changes
  const double  PI = 3.14285739;                                          ALWAYS USE CAPITAL LETTERS
 int radius =10;
 PI = 3.14; // error: assignment of read-only variable 'PI'
    double area = PI * radius * radius;
    std::cout<<"Area of circle is: "<<area ;      
 
    /*as.cpp: In function 'int main()':
as.cpp:6:7: error: assignment of read-only variable 'PI'
  PI = 3.14; // error: assignment of read-only variable 'PI'
       ^~~~
       */

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Statically typed languages check variable types at compile-time (e.g., Java, C++), catching errors early, requiring explicit type declarations, and offering better performance
Once Variable Name Given Cannot Be changed.
  
Dynamically typed languages check types at runtime (e.g., Python, JavaScript), allowing more flexibility, faster initial coding, but potentially leading to runtime errors, as variables can change types.
One Variable Name Given Can Be changed.



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    Example Code Outputs
 



#include <iostream> // Header for
// Without using namespace std;
int main() {
std::cout << "Hello, World!" <<<<
return 0;
}











