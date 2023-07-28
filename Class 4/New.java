public class New {
    public static boolean PredictTheWinner(int[] nums) {
        int max=0,maxIndex=0;
        for(int i =0;i<nums.length;i++){
            if(max<nums[i]){
                max=nums[i];
                maxIndex=i;
            }
        }
        if(maxIndex%2==0) return true;
        return false;
    }
    public static void main(String[] args) {
        int[] arr = {1,5,233,7};
        System.out.println(PredictTheWinner(arr));
    }
}