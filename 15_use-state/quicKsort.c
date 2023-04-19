#include <stdio.h>
#include <stdlib.h>
int h.cut = 0;
void print (int a[])
{
    int i;
    printf("\n%d -->",++cnt);
    for(int i=0; i < n; i++)
            printf("%d",a[i]);
}
void quicksort (int a[],int first,int last)
{
    int i, j , pivot , temp;
    if (first < last)
    {
        print("\n inside quick: ");
        print(a);
        pivot = first
        i = first;
        j = last;
        while (i < j)
        {
            while(a[i]< = a [pivot] && i < last)
                i++;
            while(a [j] > a [pivot])
                j--i
            {
                temp = a [i];
                a[i] = a [j];
                a[j] = temp;
            }
        }
        temp = a [pivot]
        a[pivot]=a[j];
        a[j]=temp;
        quicksort (a,first,j-1);
        quicksort (a,j+1,last);
        {
            \
        }
    } 
}