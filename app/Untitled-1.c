#include<stdio.h>
int main (){
    int x;
    printf("enter exam results:");
    scanf("%d",&x);
    if (x>=75 && x<=100){
        printf("you have 'A' pass");
    }
     else if (x>=65 && x<=74) {
         printf("your Have 'B' pass");
    }
         else if (x>=50 && x<=64){
           printf("You Got 'C' Pass");
         }
            else if(x>=35 && x<=49){
            printf("You Got 'S' Pass");
        }
    else{
         printf("\tU\tn\tf\to\tr\tt\tu\tn\ta\tt\tl\ty \n\tT\tr\ty \ta\tg\ta\ti\tn \tn\te\tx\tt \ts\th\ty \n\t\tYou got falled!!!!\n \t\t\tOR ERROR NUMBER PLEASE ADD \t0-100");
    }  
printf("\nHave a Good Day!!");     
 return 0;
}